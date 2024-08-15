import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { debounceTime } from 'rxjs';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-volunteer-data-search',
  templateUrl: './volunteer-data-search.component.html',
  styleUrls: ['../../../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
    './volunteer-data-search.component.css']
})
export class VolunteerDataSearchComponent implements OnInit{

  form = new FormGroup({
    search: new FormControl('', [Validators.required])
  });
  loading: boolean = false;
  constructor(private _toastr: ToastrService, private _reportService: ReportService) {}

  ngOnInit(): void {
    this.form.controls.search.valueChanges.pipe(debounceTime(250)).subscribe((value) => this.submit());
  }

  exprtToExcel() {
    this.loading=true;
    this._reportService.downloadVolunteerExcel(localStorage.getItem('name')!, 'Volunteer').subscribe({
      next: (res) => {
        let filName = res.headers.get('content-disposition')?.split(';')[1].split('=')[1];
        let blob = res.body as Blob;
        let a = document.createElement('a');
        a.download = filName ?? 'Volunteer Data';
        a.href = window.URL.createObjectURL(blob);
        a.click();
        this.loading=false;
      },
      error: (err) => {
        this._toastr.error(err.error.message);
      },
    });
  }

  submit() {
    this._reportService.volunteerFilter.search = this.form.value.search ? this.form.value.search.trim() : null;
    this._reportService.getPageVolunteer();
  }
}
