import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GuestService } from 'src/app/service/guest.service';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-report-guests-search',
  templateUrl: './report-guests-search.component.html',
  styleUrls: [
    '../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
    './report-guests-search.component.css',
  ],
})
export class ReportGuestsSearchComponent {
  loading: boolean = false;
  constructor(
    private _toastr:ToastrService,
    protected _guestService: GuestService,
    private _reportService: ReportService
  ) {}
  exprtToExcel() {
    this.loading=true;
    this._reportService
      .downloadGuestExcel(localStorage.getItem('name')!, 'Guest')
      .subscribe({
        next: (res) => {
          let filName = res.headers
            .get('content-disposition')
            ?.split(';')[1]
            .split('=')[1];
  // console.log(filName);
          let blob = res.body as Blob;
          let a = document.createElement('a');
          a.download = filName ?? 'Guests Data';
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
