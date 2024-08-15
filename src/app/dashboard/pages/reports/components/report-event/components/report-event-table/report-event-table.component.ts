import { Component } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-report-event-table',
  templateUrl: './report-event-table.component.html',
  styleUrls: ['../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './report-event-table.component.css']
})
export class ReportEventTableComponent {
  language:string;
  constructor(protected _reportService:ReportService) {
    this.language = localStorage.getItem("lang") || "en";
  }
  ngOnInit(): void {
    this._reportService.getPageEvent(1);
  } 
}
