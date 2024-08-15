import { OnInit, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserResponse } from 'src/app/models/auth';
import { AgendaStatusService } from 'src/app/service/agenda-status.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-report-agenda-filter',
  templateUrl: './report-agenda-filter.component.html',
  styleUrls: ['../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './report-agenda-filter.component.css']
})
export class ReportAgendaFilterComponent implements OnInit {
  language:string;
constructor(
  private _reportService:ReportService, 
  protected _agendaStatusService:AgendaStatusService
  ,protected _employeeService:EmployeeService) {
    this.language = localStorage.getItem("lang") || "en";
}
employeeResponse:UserResponse[] = [];
  ngOnInit(): void {
    this._agendaStatusService.Get().subscribe({
      next:(res)=>{
        this._agendaStatusService.entities = res.response.data;
      }
    });
    this._employeeService.getAllEmployee().subscribe({
      next:(res)=>{
        this.employeeResponse = res;
      }
    });
  }

form:FormGroup = new FormGroup({
  startDate: new FormControl(null),
  endDate: new FormControl(null),
  startTime: new FormControl(null),
  endTime: new FormControl(null),
  leaderId: new FormControl(null),
  statusId: new FormControl(null),
});

submit(){
    // console.log(this.form.value);
    if(this.form.value.startTime) this.form.value.startTime +=":00";
    if(this.form.value.endTime)this.form.value.endTime +=":00";
    this._reportService.agendaFilter = this.form.value;
    this._reportService.getPage(1);
    this.form.reset();
}

}
