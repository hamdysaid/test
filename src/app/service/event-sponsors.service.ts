import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EventSponsors, EventSponsorsToFormData } from '../models/event';
import { BaseService } from './repo/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class EventSponsorsService extends BaseService<EventSponsors> {
  entitisFrCurrentEvent:EventSponsors[] = [];
  endPoins = environment.endPoint.eventSponsorEndPoint;
  constructor(private _http: HttpClient) {
    super(_http, environment.endPoint.eventSponsorEndPoint.base);
   }
   override Create(entity: EventSponsors): Observable<ApiResponse<EventSponsors>> {
    return this.http.post<ApiResponse<EventSponsors>>(`${this.baseURL}${this.endPoint}`, EventSponsorsToFormData(entity));
  }

  override Update(entity: EventSponsors): Observable<ApiResponse<EventSponsors>> {
    return this.http.put<ApiResponse<EventSponsors>>(`${this.baseURL}${this.endPoint}/${entity.id}`, EventSponsorsToFormData(entity));
  }
  getByEventId(eventId:number):Observable<ApiResponse<EventSponsors[]>>{
    return this.http.get<ApiResponse<EventSponsors[]>>(`${this.baseURL}${this.endPoins.event}${eventId}`);
  }
}
