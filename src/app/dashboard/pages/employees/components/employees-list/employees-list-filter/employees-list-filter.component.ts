import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Department } from 'src/app/models/department';
import { Principalitie } from 'src/app/models/principalitie';
import { DepartmentService } from 'src/app/service/department.service';
import { EmployeeStatusService } from 'src/app/service/employee-status.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { PrincipalityService } from 'src/app/service/principality.service';
import { ReportService } from 'src/app/service/report.service';
import { StateMachineService } from 'src/app/service/state-machine.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-employees-list-filter',
  templateUrl: './employees-list-filter.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './employees-list-filter.component.css']
})
export class EmployeesListFilterComponent implements OnInit {
  language:string;
  constructor(
    private _stateService : StateMachineService,
    protected _employeeStatusService:EmployeeStatusService,
    protected _principalityService:PrincipalityService,
    protected _departmentService:DepartmentService,
    protected _employeeService:EmployeeService) {
      this.language = localStorage.getItem("lang") || "en";
  }
  principalityResponse:Principalitie[] = [];
  departmentResponse:Department[] = [];
    ngOnInit(): void {
      this._employeeStatusService.Get().subscribe({
        next:(res)=>{
          this._employeeStatusService.entities = res.response.data;
        }
      });
      this._principalityService.GetAll().subscribe({
        next:(res)=>{
          this.principalityResponse = res.response.data;
        }
      });
      this._departmentService.GetAll().subscribe({
        next:(res)=>{
          this.departmentResponse = res.response.data;
        }
      });
    }
  
  form:FormGroup = new FormGroup({
  startTime: new FormControl(null),
  endTime: new FormControl(null),
  departmentId: new FormControl(null),
  isActive: new FormControl(true),
  principalityId: new FormControl(null),
  });
  
  submit(){
    // console.log(this.form.value);
    if(this.form.value.departmentId)this.form.value.departmentId = +this.form.value.departmentId;
    if(this.form.value.principalityId)this.form.value.principalityId = +this.form.value.principalityId;
    
    if(this.form.value.startTime)this.form.value.startTime+=":00";
    if(this.form.value.endTime)this.form.value.endTime+=":00";
    // console.log(this.form.value);
    this._employeeService.getPage(1, this.form.value);
    this._stateService.ShowVolunteerFilterSeach();
  }
}
