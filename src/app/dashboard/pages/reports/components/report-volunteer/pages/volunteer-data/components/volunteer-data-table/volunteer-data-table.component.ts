import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-volunteer-data-table',
  templateUrl: './volunteer-data-table.component.html',
  styleUrls: ['../../../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './volunteer-data-table.component.css']
})
export class VolunteerDataTableComponent implements OnInit {
  language:string;
  constructor(protected _reportService:ReportService){
    this.language = localStorage.getItem("lang") || "en";
  }
  ngOnInit(): void {
    this._reportService.getPageVolunteer();
  }
}
