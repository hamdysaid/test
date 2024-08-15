import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { debounceTime } from 'rxjs';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-report-event-search',
  templateUrl: './report-event-search.component.html',
  styleUrls: ['../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
    './report-event-search.component.css']
})
export class ReportEventSearchComponent implements OnInit {
  loading: boolean = false;
  form = new FormGroup({
    search: new FormControl('', [Validators.required])
  });

  constructor(private _toastr: ToastrService, protected _reportService: ReportService) { }

  ngOnInit(): void {
    this.form.controls.search.valueChanges.pipe(debounceTime(250)).subscribe((value) => this.submit());
  }

  exprtToExcel() {
    this.loading=true;
    this._reportService.downloadEventExcel(localStorage.getItem('name')!, 'Event').subscribe({
      next: (res) => {
        let filName = res.headers.get('content-disposition')?.split(';')[1].split('=')[1];
        // console.log(filName);
        let blob = res.body as Blob;
        let a = document.createElement('a');
        a.download = filName ?? 'Event Data';
        a.href = window.URL.createObjectURL(blob);
        a.click();
        this.loading=false;
      },
      error: (err) => {
        this._toastr.error(err.error.message);
        // console.log(err);
      },
    });
  }
  submit() {
    let { search } = this.form.value;
    this._reportService.searchEvent = search ? `Name:${search}'NameAR:${search};Description:${search};DescriptionAR:${search};` : null;
    this._reportService.getPageEvent(1);
  }
}
