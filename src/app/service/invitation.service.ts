import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Invitaion } from '../models/Invitation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class InvitationService extends BaseService<Invitaion>{
  invitationEndPoint = environment.endPoint.invitationEndPoint;
  constructor(private _http:HttpClient) {
    super(_http, environment.endPoint.invitationEndPoint.base);
  }

  invitationVolunteer(email:string):Observable<any>{
    return this._http.get<any>(`${this.baseURL}${this.invitationEndPoint.invitationVolunteer}${email}`);
  }
  invitationEmployee(email:string):Observable<ApiResponse<Invitaion[]>>{
    return this._http.get<ApiResponse<Invitaion[]>>(`${this.baseURL}${this.invitationEndPoint.invitationEmployee}${email}`);
  }
}
