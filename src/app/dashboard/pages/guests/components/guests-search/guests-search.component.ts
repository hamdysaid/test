import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { GuestService } from 'src/app/service/guest.service';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-guests-search',
  templateUrl: './guests-search.component.html',
  styleUrls: ['../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './guests-search.component.css']
})
export class GuestsSearchComponent {
  loading: boolean = false;
  constructor(private _toastService:ToastrService, private _reportService:ReportService,protected _guestService:GuestService){}
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
          this._toastService.error(err.error.message);
        },
      });
  }
  submit() {
    this._guestService.getGuestReportPagenation(1);
  }
  
}
