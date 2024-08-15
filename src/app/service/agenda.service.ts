import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Agenda, AgendaToFomData } from '../models/agenda';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService extends BaseService<Agenda>{
  dateStart:Date = new Date();
  dateEnd:Date =  new Date();
endPoints = environment.endPoint.agendaEndPoint;
  constructor(private _http:HttpClient) {
    super(_http, environment.endPoint.agendaEndPoint.base);
   }

  getAgendaFilter(dateStart:string, dateEnd:string):Observable<ApiResponse<Agenda[]>>{
    return this._http.get<ApiResponse<Agenda[]>>(`${this.baseURL}${this.endPoints.filter}?StartDate=${dateStart}&EndDate=${dateEnd}`);
  } 

  override Create(entity: Agenda): Observable<ApiResponse<Agenda>> {
 // console.log(entity);
    return this.http.post<ApiResponse<Agenda>>(`${this.baseURL}${this.endPoint}`,AgendaToFomData(entity));
  }

  getAgendaFilterSubscripe(){
    const yearStart = this.dateStart.getFullYear();
    const monthStart = (this.dateStart.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed, so add 1
    const dayStart = this.dateStart.getDate().toString().padStart(2, '0');
    const yearEnd = this.dateEnd.getFullYear();
    const monthEnd = (this.dateEnd.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed, so add 1
    const dayEnd = this.dateEnd.getDate().toString().padStart(2, '0');
    this.getAgendaFilter(`${yearStart}-${monthStart}-${dayStart}`,`${yearEnd}-${monthEnd}-${dayEnd}`).subscribe({
      next:(res)=>{
        this.entities = res.response;
      }
    });
  }

  getAgendaByEmail(email:string):Observable<ApiResponse<Agenda[]>>{
    return this._http.get<ApiResponse<Agenda[]>>(`${this.baseURL}${environment.endPoint.agendaEndPoint.byUserEmail}${email}`);
  }

}
