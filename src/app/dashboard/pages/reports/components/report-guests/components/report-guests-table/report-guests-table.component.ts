import { Component, OnInit } from '@angular/core';
import { GuestService } from 'src/app/service/guest.service';

@Component({
  selector: 'app-report-guests-table',
  templateUrl: './report-guests-table.component.html',
  styleUrls: [
    '../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
    './report-guests-table.component.css',
  ],
})
export class ReportGuestsTableComponent implements OnInit {
  constructor(protected _guestService:GuestService) {}
  ngOnInit(): void {
    this._guestService.getGuestReportPagenation();
  }
}
