import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { ProofCertificate } from '../models/ProofCertificate';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiResponse, Pagenation } from '../models/response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProofCertificateService extends BaseService<ProofCertificate>{
  private _proofCertificateEndPoint = environment.endPoint.proofCertificateEndPoint;
  constructor(private _http:HttpClient) {
    super(_http, environment.endPoint.proofCertificateEndPoint.base);
   }

   getProofCertficateForTheVolunteer(email:string):Observable<ApiResponse<Pagenation<ProofCertificate>>>{
    return this._http.get<ApiResponse<Pagenation<ProofCertificate>>>(`${this.baseURL}${this._proofCertificateEndPoint.proofCertificateVolunteer}${email}`);
   }
}
