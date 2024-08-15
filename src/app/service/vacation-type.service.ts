import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { VacationType } from '../models/vacation-type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationTypeService extends BaseService<VacationType>{
  // private endPoints = environment.endPoint.vacationTypeEndPoint;
  constructor(private _http: HttpClient) {
    super(_http, environment.endPoint.vacationTypeEndPoint.base);
  }

  // getVacationForEmployee(): Observable<any[]> {
  //   return this._http.get<any[]>(`${this.baseURL}${this.endPoints.vacationEmployee}${email}`);
  // }
}
