import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Invitaion } from 'src/app/models/Invitation';
import { Agenda } from 'src/app/models/agenda';
import { EmployeeChart } from 'src/app/models/employee';
import { EmployeeResponse } from 'src/app/models/employee-response';
import { Event } from 'src/app/models/event';
import { ApiResponse } from 'src/app/models/response';
import { Vacation } from 'src/app/models/vacation';
import { AgendaService } from 'src/app/service/agenda.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { EventService } from 'src/app/service/event.service';
import { InvitationService } from 'src/app/service/invitation.service';
import { VacationService } from 'src/app/service/vacation.service';

@Component({
  selector: 'app-employees-view-page',
  templateUrl: './employees-view-page.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './employees-view-page.component.css']
})
export class EmployeesViewPageComponent implements OnInit{
  employee:EmployeeResponse = {
    id: '',
    fullName: '',
    email: '',
    phoneNumber: '',
    principality: {
      name: '',
      nameAR: '',
      id: 0,
      createdAt: null,
      updatedAt: null
    },
    startWorkTime: '',
    endWorkTime: '',
    department: {
      name: '',
      nameAR: '',
      color: '',
      id: 0,
      createdAt: null,
      updatedAt: null
    },
    isActive: false,
    image: '',
    internationalId: '',
    employeeNumber: ''
  };
  invitations:Invitaion[]=[];
  agenda:Agenda[]=[];
  language:string;
  constructor(
    private _employeeService:EmployeeService,
    private _activatedRoute:ActivatedRoute,
    private _invitationService:InvitationService,
    private _agendaService:AgendaService,
    private _eventService:EventService,
    private _vacationService:VacationService
    ) {
      this.language = localStorage.getItem("lang") || "en";
    }

    chart$:Observable<EmployeeChart>;
    vacation$:Observable<Vacation[]>;
    events$:Observable<ApiResponse<Event[]>>;
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next:(res)=>{

        this._agendaService.getAgendaByEmail(res.get("id")!).subscribe({
          next:(res)=>{
            //console.log(res);
            this.agenda = res.response;
          }
        });
        
       this._invitationService.invitationEmployee(res.get("id")!).subscribe({
        next:(res)=>{
          this.invitations =res.response;
        }
       });
      this._employeeService.getEmployeeDetails(res.get("id")!).subscribe({
        next:(res)=>{
          this.employee = res.response;
        }
      });
      this.chart$ = this._employeeService.getchartEmployee(res.get("id")!);
      this.events$ = this._eventService.getEventEmployee(res.get("id")!);
      this.vacation$ = this._vacationService.getVacationForEmployee(res.get("id")!);
      }
    });
  }

}
