import { Injectable } from '@angular/core';
import {
  AgendaFilter,
  EmployeeFilter,
  EventFilter,
  InvitationFilter,
  VolunteerFilter,
} from '../models/filtering';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pagenation } from '../models/response';
import { Agenda, AgendaReport } from '../models/agenda';
import { Observable } from 'rxjs';
import { Volunteer, VolunteerReport } from '../models/volunteer';
import { Employee, EmployeeReport } from '../models/employee';
import { Invitaion, InvitaionReport } from '../models/Invitation';
import { EmployeeResponse } from '../models/employee-response';
import { GusetReport } from '../models/guest';
import { GenerateToFormData } from '../utils/extensions';
import { EventReport } from '../models/event';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ReportService {
  baseURL = environment.API_URL;
  reportEndPoints = environment.endPoint.reportEndPoint;
  volunteerFilter: VolunteerFilter = {
    search: null,
    startDate: null,
    endDate: null,
    principalityId: null,
    genderId: null,
    degreeId: null,
    page: 1,
    pageSize: 10,
  };
  employeeFilter: EmployeeFilter = {
    search: null,
    startTime: null,
    endTime: null,
    principalityId: null,
    statusId: null,
    departmentId: null,
    page: 1,
    pageSize: 10,
  };
  invitationFilter: InvitationFilter = {
    search: null,
    startTime: null,
    endTime: null,
    principalityId: null,
    statusId: null,
    page: 1,
    pageSize: 10,
  };
  agendaFilter: AgendaFilter = {
    search: null,
    startDate: null,
    endDate: null,
    startTime: null,
    endTime: null,
    leaderId: null,
    statusId: null,
    page: 1,
    pageSize: 10,
  };
  eventFilter: EventFilter = {
    search: null,
    startTime: null,
    endTime: null,
    statusId: null,
    page: 1,
    pageSize: 10,
  }
  volunteerData: Pagenation<VolunteerReport> = {
    pagination: {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      rowCount: 0,
    },
    data: [],
  };
  invitationData: Pagenation<InvitaionReport> = {
    pagination: {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      rowCount: 0,
    },
    data: [],
  };
  employeeData: Pagenation<EmployeeReport> = {
    pagination: {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      rowCount: 0,
    },
    data: [],
  };
  agendaData: Pagenation<AgendaReport> = {
    pagination: {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      rowCount: 0,
    },
    data: [],
  };
  eventData: Pagenation<EventReport> = {
    pagination: {
      currentPage: 1,
      pageCount: 0,
      pageSize: 10,
      rowCount: 0,
    },
    data: [],
  };
  constructor(private _toastService:ToastrService, private _http: HttpClient) {}

  getAgenda(): Observable<Pagenation<AgendaReport>> {
    return this._http.post<Pagenation<AgendaReport>>(
      `${this.baseURL}${this.reportEndPoints.agenda}`,
      GenerateToFormData(this.agendaFilter)
    );
  }
  getEvent(
    page:number = 1, 
    pageSize:number = 20, 
    statusId:number|null, 
    startDate:string|null, 
    endDate:string|null,
    search:string|null): Observable<Pagenation<EventReport>> {
    let query = `?page=${page}&pageSize=${pageSize}`;
    if(statusId)query+= `&statusId=${statusId}`;
    if(startDate)query+= `&startDate=${startDate}`;
    if(endDate)query+= `&endDate=${endDate}`;
    if(search)query+= `&search=${search}`;
    return this._http.get<Pagenation<EventReport>>(
      `${this.baseURL}${this.reportEndPoints.event}${query}`
    );
  }
  getVolunteer(): Observable<Pagenation<VolunteerReport>> {
    return this._http.post<Pagenation<VolunteerReport>>(
      `${this.baseURL}${this.reportEndPoints.volunteer}`,
      GenerateToFormData(this.volunteerFilter)
    );
  }
  getEmployee(): Observable<Pagenation<EmployeeReport>> {
    return this._http.post<Pagenation<EmployeeReport>>(
      `${this.baseURL}${this.reportEndPoints.employee}`,
      GenerateToFormData(this.employeeFilter)
    );
  }
  getInvitation(): Observable<Pagenation<InvitaionReport>> {
    return this._http.post<Pagenation<InvitaionReport>>(
      `${this.baseURL}${this.reportEndPoints.invittion}`,
      GenerateToFormData(this.invitationFilter)
    );
  }
  getPage(pageNumber: number = 1) {
    this.agendaFilter.page = pageNumber;
    this.getAgenda().subscribe({
      next: (res) => {
        //console.log(res);
        this.agendaData = res;
      },
      error: (err) => {
        this._toastService.error(err.error.message);
// console.log(err);
      },
    });
  }

  //event prop
pageEvent:number =1; 
pageSizeEvent:number = 10; 
statusIdEvent:number|null;
startDateEvent:string|null;
endDateEvent:string|null;
searchEvent:string|null;
  //end
  getPageEvent(pageNumber: number = 1) {
    this.pageEvent = pageNumber;
    this.getEvent(this.pageEvent,this.pageSizeEvent,this.statusIdEvent,this.startDateEvent,this.endDateEvent,this.searchEvent).subscribe({
      next: (res) => {
        //console.log(res);
        this.eventData = res;
      },
      error: (err) => {
// console.log(err);
        this._toastService.error(err.error.message);

      },
    });
  }
  getPageVolunteer(pageNumber: number = 1) {
    this.volunteerFilter.page = pageNumber;
    this.getVolunteer().subscribe({
      next: (res) => {
        this.volunteerData = res;
      },
      error: (err) => {
// console.log(err);
        this._toastService.error(err.error.message);
      },
    });
  }
  getPageEmployee(pageNumber: number = 1) {
    this.employeeFilter.page = pageNumber;
    this.getEmployee().subscribe({
      next: (res) => {
        this.employeeData = res;
      },
      error: (err) => {
// console.log(err);
        this._toastService.error(err.error.message);
      },
    });
  }
  getPageInvitation(pageNumber: number = 1) {
    this.invitationFilter.page = pageNumber;
    this.getInvitation().subscribe({
      next: (res) => {
        this.invitationData = res;
        //console.log(res);
      },
      error: (err) => {
// console.log(err);
        this._toastService.error(err.error.message);
      },
    });
  }

  downloadExcel(
    authr: string,
    filename = 'invitations',
    sheetname: string = 'invitations',
    title: string = 'invitations'
  ) {
    return this._http.get(
      `${this.baseURL}${this.reportEndPoints.invittionExport}?sheetName=${sheetname}&author=${authr}&title=${title}&fileName=${filename}`,
      { observe: 'response', responseType: 'blob' }
    );
  }

  downloadGuestExcel(
    authr: string,
    filename = 'Guest',
    sheetname: string = 'Guest',
    title: string = 'Guest'
  ) {
    return this._http.get(
      `${this.baseURL}${this.reportEndPoints.guestExport}?sheetName=${sheetname}&author=${authr}&title=${title}&fileName=${filename}`,
      { observe: 'response', responseType: 'blob' }
    );
  }

  downloadActivityExcel(
    authr: string,
    filename = 'Activity',
    sheetname: string = 'Activity',
    title: string = 'Activity'
  ) {
    return this._http.get(
      `${this.baseURL}${this.reportEndPoints.activityExport}?sheetName=${sheetname}&author=${authr}&title=${title}&fileName=${filename}`,
      { observe: 'response', responseType: 'blob' }
    );
  }

  downloadEventExcel(
    authr: string,
    filename = 'Event',
    sheetname: string = 'Event',
    title: string = 'Event'
  ) {
    return this._http.get(
      `${this.baseURL}${this.reportEndPoints.eventExport}?sheetName=${sheetname}&author=${authr}&title=${title}&fileName=${filename}`,
      { observe: 'response', responseType: 'blob' }
    );
  }

  downloadVolunteerExcel(
    authr: string,
    filename = 'Volunteer',
    sheetname: string = 'Volunteer',
    title: string = 'Volunteer'
  ) {
    return this._http.get(
      `${this.baseURL}${this.reportEndPoints.volunteerExport}?sheetName=${sheetname}&author=${authr}&title=${title}&fileName=${filename}`,
      { observe: 'response', responseType: 'blob' }
    );
  }
  downloadAgendaExcel(
    authr: string,
    filename = 'Agenda',
    sheetname: string = 'Agenda',
    title: string = 'Agenda'
  ) {
    return this._http.get(
      `${this.baseURL}${this.reportEndPoints.agendaExport}?sheetName=${sheetname}&author=${authr}&title=${title}&fileName=${filename}`,
      { observe: 'response', responseType: 'blob' }
    );
  }
  downloadEmployeeExcel(
    authr: string,
    filename = 'Employees',
    sheetname: string = 'Employees',
    title: string = 'Employees'
  ) {
    return this._http.get(
      `${this.baseURL}${this.reportEndPoints.employeeExport}?sheetName=${sheetname}&author=${authr}&title=${title}&fileName=${filename}`,
      { observe: 'response', responseType: 'blob' }
    );
  }
}
