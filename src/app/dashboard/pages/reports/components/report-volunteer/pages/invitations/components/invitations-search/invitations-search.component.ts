import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { debounceTime } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';
import { ReportService } from 'src/app/service/report.service';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-invitations-search',
  templateUrl: './invitations-search.component.html',
  styleUrls: ['../../../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
    './invitations-search.component.css']
})
export class InvitationsSearchComponent implements OnInit {

  form = new FormGroup({
    search: new FormControl('', [Validators.required])
  });
  loading: boolean = false;
  constructor(private _toastr: ToastrService, private _reportService: ReportService) { }

  ngOnInit(): void {
    this.form.controls.search.valueChanges.pipe(debounceTime(250)).subscribe((value) => this.submit());
  }

  submit() {
    this._reportService.invitationFilter.search = this.form.value.search ? this.form.value.search.trim() : null;
    this._reportService.getPageInvitation();
  }

  exprtToExcel() {
    this.loading = true;
    this._reportService.downloadExcel(localStorage.getItem("name")!, "Invitations").subscribe({
      next: (res) => {
        let filName = res.headers.get('content-disposition')?.split(";")[1].split("=")[1];
        // console.log(filName);
        let blob = res.body as Blob;
        let a = document.createElement("a");
        a.download = filName ?? "Invitations";
        a.href = window.URL.createObjectURL(blob);
        a.click();
        this.loading = false;
      },
      error: (err) => {
        // console.log(err);
        this._toastr.error(err.error.message);

      }
    });
  }
}
