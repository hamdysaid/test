import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['../../../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './employees-table.component.css']
})
export class EmployeesTableComponent implements OnInit {
  language:string;
  constructor(protected _reportService:ReportService) {
    this.language = localStorage.getItem("lang") || "en";
  }
   ngOnInit(): void {
      this._reportService.getPageEmployee();
    } 
}
