import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Invitaion, invitaionToformData } from '../models/Invitation';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ApiResponse, Pagenation } from '../models/response';
import { VolunteerSearchPagenation, VolunteerSearchPagenationToFormData } from '../models/user-pagenation';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class invitationservice extends BaseService<Invitaion> {
  entitisFrInvitaion:Invitaion[] = [];
  volunteerSearchPagenation:VolunteerSearchPagenation ={
  sortDirection: null,
  start: null,
  degreeId: null,
  search: null,
  page: 1,
  statusIdAsString: null,
  pageSize: 10,
  sortColumn: null,
  workPlace: null,
  daysAsString: null,
  end: null,
  principalityId: null,
  genderId: null,
  age: null
};
constructor(private _http: HttpClient, protected _toastr: ToastrService) {
  super(_http, environment.endPoint.invitationEndPoint.base);
}
   
invitaionFilter(model: VolunteerSearchPagenation):Observable<Pagenation<Invitaion>> {
  return this._http.post<Pagenation<Invitaion>>(
    `${this.baseURL}${environment.endPoint.invitationEndPoint.filter}`,
    VolunteerSearchPagenationToFormData(model)
  );
}

getPage(pageNumber: number, model: VolunteerSearchPagenation|null = this.volunteerSearchPagenation){
  if(!model) model = this.volunteerSearchPagenation;
    model.page = pageNumber;
  this.invitaionFilter(model)
  .subscribe({
    next:(res)=>{
      this.pagenationEntities = res;
      if(this.pagenationEntities.data.length == 0) 
        this._toastr.show("No Data");
    },
    error:(err:HttpErrorResponse)=>{
      this._toastr.error(err.error.message);
    }
    });
  }

  override Create(entity: Invitaion): Observable<ApiResponse<Invitaion>> {
    return this.http.post<ApiResponse<Invitaion>>(`${this.baseURL}${this.endPoint}`, invitaionToformData(entity));
  }

  override Update(entity: Invitaion): Observable<any> {
    return this.http.put<ApiResponse<Invitaion>>(`${this.baseURL}${this.endPoint}/${entity.id}`, invitaionToformData(entity));
  }
  delete(id:number){
    return this._http.delete(`${this.baseURL}${this.endPoint}/${id}`);
  }

}
