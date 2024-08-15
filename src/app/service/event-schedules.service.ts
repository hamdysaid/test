import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { EventSchedules, EventSchedulesToFormData } from '../models/event';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class EventSchedulesService extends BaseService<EventSchedules> {
  entitisFrCurrentEvent:EventSchedules[] = [];
  endPoins = environment.endPoint.eventScheduleEndPoint;
  constructor(private _http: HttpClient) {
    super(_http, environment.endPoint.eventScheduleEndPoint.base);
   }

   override Create(entity: EventSchedules): Observable<ApiResponse<EventSchedules>> {
    return this.http.post<ApiResponse<EventSchedules>>(`${this.baseURL}${this.endPoint}`, EventSchedulesToFormData(entity));
  }

  override Update(entity: EventSchedules): Observable<ApiResponse<EventSchedules>> {
    return this.http.put<ApiResponse<EventSchedules>>(`${this.baseURL}${this.endPoint}/${entity.id}`, EventSchedulesToFormData(entity));
  }

  getByEventId(eventId:number):Observable<ApiResponse<EventSchedules[]>>{
    return this.http.get<ApiResponse<EventSchedules[]>>(`${this.baseURL}${this.endPoins.event}${eventId}`);
  }
}
