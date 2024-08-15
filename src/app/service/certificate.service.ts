import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Certificate, CertificateToFormData } from '../models/certificate';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/response';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class CertificateService extends BaseService<Certificate>{
 endPoints = environment.endPoint.certificateEndPoint;
  constructor(private _http:HttpClient) 
  {
    super(_http, environment.endPoint.certificateEndPoint.base);
  }

  getCerficateByInvitationId(invitationId:number):Observable<ApiResponse<Certificate>>
  {
    return this._http.
    get<ApiResponse<Certificate>>(`${this.baseURL}${environment.endPoint.certificateEndPoint.getCertificateByInvitaionId}${invitationId}`)
  }
  override Create(entity: Certificate): Observable<ApiResponse<Certificate>> {
    return this.http.post<ApiResponse<Certificate>>(`${this.baseURL}${this.endPoint}`, CertificateToFormData(entity));
  }

  sendEmail(id:number):Observable<ApiResponse<null>>{
    return this._http.get<ApiResponse<null>>(`${this.baseURL}${this.endPoints.sendEmail}${id}`)
  }
}
