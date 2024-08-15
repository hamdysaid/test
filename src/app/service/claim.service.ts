import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/response';
import { Observable } from 'rxjs';
import { claimSD } from '../utils/role';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {
  api = environment.API_URL;
  claim = environment.endPoint.userEndPoints.userClaim;
  constructor(private _http:HttpClient) { }
  getEmployeeClaims(email:string):Observable<ApiResponse<claimSD>>{
    return this._http.get<ApiResponse<claimSD>>(`${this.api}${this.claim}/${email}`);
  }

  sendClaims(email:string,claims:string[])
  {
    return this._http.put(`${this.api}${this.claim}?userEmail=${email}`,claims);
  }
}
