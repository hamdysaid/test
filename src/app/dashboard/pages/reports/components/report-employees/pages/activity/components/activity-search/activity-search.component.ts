import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-activity-search',
  templateUrl: './activity-search.component.html',
  styleUrls: ['../../../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './activity-search.component.css']
})
export class ActivitySearchComponent {
  constructor(private _toastr:ToastrService, protected _reportService:ReportService){}
  loading: boolean = false;
  exprtToExcel() {
    this.loading=true;
    this._reportService
      .downloadActivityExcel(localStorage.getItem('name')!, 'Activity')
      .subscribe({
        next: (res) => {
          let filName = res.headers
            .get('content-disposition')
            ?.split(';')[1]
            .split('=')[1];
  // console.log(filName);
          let blob = res.body as Blob;
          let a = document.createElement('a');
          a.download = filName ?? 'Activity Data';
          a.href = window.URL.createObjectURL(blob);
          a.click();
          this.loading=false;
        },
        error: (err) => {
  // console.log(err);        
          this._toastr.error(err.error.message);

        },
      });
  }
}
