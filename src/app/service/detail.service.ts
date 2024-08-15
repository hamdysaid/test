import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/response';
import { ChartsForUserNumbers, DataForUserRegister } from '../models/detail';
import { Observable } from 'rxjs';
import { ChartVolunteerRequest } from '../models/chartVolunteerRequest';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  
  baseUrl = environment.API_URL;
  endPoints = environment.endPoint.detail;

  constructor(private _http:HttpClient) { }
  
  DataForUserRegister():Observable<ApiResponse<DataForUserRegister>>{
    return this._http.get<ApiResponse<DataForUserRegister>>(`${this.baseUrl}${this.endPoints.dataForUserRegister}`);
  }
  
  ChartsForUserNumbers():Observable<ApiResponse<ChartsForUserNumbers>>{
    return this._http.get<ApiResponse<ChartsForUserNumbers>>(`${this.baseUrl}${this.endPoints.chartsForUserNumbers}`);
  }

  ChartVolunteerRequest():Observable<ApiResponse<ChartVolunteerRequest>>{
    return this._http.get<ApiResponse<ChartVolunteerRequest>>(`${this.baseUrl}${this.endPoints.chartVolunteerRequest}`);
  }

}
