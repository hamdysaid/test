import { OnInit, Component } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-report-agenda-table',
  templateUrl: './report-agenda-table.component.html',
  styleUrls: ['../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './report-agenda-table.component.css']
})
export class ReportAgendaTableComponent implements OnInit{
  language:string;
constructor(protected _reportService:ReportService) {
  this.language = localStorage.getItem("lang") || "en";
}
 ngOnInit(): void {
    this._reportService.getPage(1);
  } 

}
