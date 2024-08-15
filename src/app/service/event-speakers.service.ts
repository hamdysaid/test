import { Injectable } from '@angular/core';
import { EventSpeakers, EventSpeakersToFormData } from '../models/event';
import { BaseService } from './repo/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';

@Injectable({
  providedIn: 'root',
})
export class EventSpeakersService extends BaseService<EventSpeakers> {
  entitisFrCurrentEvent:EventSpeakers[] = [];
  endPoins = environment.endPoint.eventSpeakersEndPoint;
  constructor(private _http: HttpClient) {
    super(_http, environment.endPoint.eventSpeakersEndPoint.base);
   }
   override Create(entity: EventSpeakers): Observable<ApiResponse<EventSpeakers>> {
    return this.http.post<ApiResponse<EventSpeakers>>(`${this.baseURL}${this.endPoint}`, EventSpeakersToFormData(entity));
  }

  override Update(entity: EventSpeakers): Observable<ApiResponse<EventSpeakers>> {
    return this.http.put<ApiResponse<EventSpeakers>>(`${this.baseURL}${this.endPoint}/${entity.id}`, EventSpeakersToFormData(entity));
  }
  getByEventId(eventId:number):Observable<ApiResponse<EventSpeakers[]>>{
    return this.http.get<ApiResponse<EventSpeakers[]>>(`${this.baseURL}${this.endPoins.event}${eventId}`);
  }
}
