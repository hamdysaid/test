import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, Pagenation } from 'src/app/models/response';
import { Status } from 'src/app/models/status';
import { ChairStatusService } from 'src/app/service/chair-status.service';
import { GuestStatusService } from 'src/app/service/guest-status.service';
import { GuestService } from 'src/app/service/guest.service';

@Component({
  selector: 'app-report-guests-filter',
  templateUrl: './report-guests-filter.component.html',
  styleUrls: [
    '../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
    './report-guests-filter.component.css',
  ],
})
export class ReportGuestsFilterComponent implements OnInit {
  language:string;
  guestStatus$: Observable<ApiResponse<Pagenation<Status>>>;
  constructor(
    protected _guestService: GuestService,
    private _guestStatus: ChairStatusService
  ) {
    this.language = localStorage.getItem("lang") || "en";
  }
  ngOnInit(): void {
    this.guestStatus$ = this._guestStatus.GetAll();
  }

  onClick() {
    this._guestService.getGuestReportPagenation(1);
  }
}
