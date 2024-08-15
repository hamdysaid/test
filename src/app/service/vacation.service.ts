import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Vacation } from '../models/vacation';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationService extends BaseService<Vacation>{
 private endPoints = environment.endPoint.vacationEndPoint;
  constructor(private _http:HttpClient) {
    super(_http, environment.endPoint.vacationEndPoint.base);
  }

  getVacationForEmployee(email:string):Observable<Vacation[]>{
    return this._http.get<Vacation[]>(`${this.baseURL}${this.endPoints.vacationEmployee}${email}`);
  }
  AcceptOrRejectVacation(id:number, request:boolean){
    return this._http.get(`${this.baseURL}${this.endPoints.acceptOrRejectVacation}/${id}?request=${request}`);
  }
}
