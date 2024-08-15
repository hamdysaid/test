import { Component } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-invitations-table',
  templateUrl: './invitations-table.component.html',
  styleUrls: ['../../../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './invitations-table.component.css']
})
export class InvitationsTableComponent {
  constructor(protected _reportService:ReportService) {
  }
   ngOnInit(): void {
      this._reportService.getPageInvitation();
    } 
}
