import { Injectable } from '@angular/core';
import { Event, EventReport, EventToFormData } from '../models/event';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseService } from './repo/base.service';
import { Observable } from 'rxjs';
import { ApiResponse, Pagenation } from '../models/response';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class EventService extends BaseService<Event>{
  reportEndPoints = environment.endPoint.reportEndPoint;
  currentPage = 1;
  eventResponse: Pagenation<Event> = {
    pagination: {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      rowCount: 0,
    },
    data: [],
  };
  override baseURL = environment.API_URL;
  endPoints = environment.endPoint.eventEndPoint;
    constructor(private _http: HttpClient,private _toastr:ToastrService) {
      super(_http, environment.endPoint.eventEndPoint.base);
     }

    override Create(entity: Event): Observable<ApiResponse<Event>> {
      return this.http.post<ApiResponse<Event>>(`${this.baseURL}${this.endPoint}`, EventToFormData(entity));
    }

    override Update(entity: Event): Observable<ApiResponse<Event>> {
      return this.http.put<ApiResponse<Event>>(`${this.baseURL}${this.endPoint}/${entity.id}`, EventToFormData(entity));
    }

    
  eventFilter(
    page: number | null = null,
    pageSize: number | null = null,
    search: string | null = null,
    // sortColumn: string | null = null,
    // sortDirection: string | null = null,
  ): Observable<Pagenation<Event>> {
    let query = '?';
    if (page) query += `&page=${page}`;
    if (pageSize) query += `&pageSize=${pageSize}`;
    if (search) query += `&search=${search}`;
    // if (sortColumn) query += `&sortColumn=${sortColumn}`;
    // if (sortDirection) query += `&sortDirection=${sortDirection}`;
    return this._http.get<Pagenation<Event>>(
      `${this.baseURL}${this.endPoints.base}${query}`
    );
  }

  getPage(
    page: number | null = null,
    pageSize: number | null = null,
    search: string | null = null
  ) {
    if (page) this.currentPage = page;
    this.eventFilter(page, pageSize, search).subscribe({
      next: (res) => {
        //console.log(res);
        this.eventResponse = res;
      },
      error: (err: HttpErrorResponse) => {
        this._toastr.error(err.error.message);
// console.log(err);
      },
    });
  }

    eventReportPagenatin: Pagenation<EventReport> = {
      pagination: {
        currentPage: 0,
        pageCount: 0,
        pageSize: 0,
        rowCount: 0,
      },
      data: [],
    };
    override search: string | null;
    statusId: string | null;
    getEventReport(
      search: string | null,
      statusId: string | null,
      page: number=1,
      pageSize: number=20
    ): Observable<Pagenation<EventReport>> {
      let query: string = '';
      if (search) query += `&search=${search}`;
      if (statusId) query += `&statusId=${statusId}`;
      if (page) query += `&page=${page}`;
      if (pageSize) query += `&pageSize=${pageSize}`;
      return this._http.get<Pagenation<EventReport>>(
        `${this.baseURL}${this.reportEndPoints.event}?${query}`
      );
    }
  
    getEventReportPagenation(page:number = 1){
      this.getEventReport(this.search,this.statusId,page).subscribe({
        next:(res)=>{
          //console.log(res);
          this.eventReportPagenatin = res;
        }
      });
    }

    getEventEmployee(email:string):Observable<ApiResponse<Event[]>>{
      return this._http.get<ApiResponse<Event[]>>(`${this.baseURL}${this.endPoints.eventEmployee}/${email}`);
    }
}
