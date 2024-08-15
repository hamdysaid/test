import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Chair, ChairChangeLocaton, ChairType, CreateChair } from '../models/chair';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';

@Injectable({
  providedIn: 'root'
})

export class ChairService{
  
  api= environment.API_URL;
endPoints = environment.endPoint.chairEndPoint;
  constructor(private _http:HttpClient) { }

  deleteChair(id:number){
    return this._http.delete(`${this.api}${this.endPoints.base}/${id}`);
  }

  createAllChaires(models:CreateChair[]):Observable<ApiResponse<Chair[]>>{
    return this._http.post<ApiResponse<Chair[]>>(`${this.api}${this.endPoints.createAllChairs}`, models);
  }

  updateChairLcation(model:ChairChangeLocaton){
    return this._http.put(`${this.api}${this.endPoints.changelocation}/${model.id}`,model);
  }

  swithChairType(chairId:number, typeId:ChairType):Observable<ApiResponse<string>>{
    return this._http.get<ApiResponse<string>>(`${this.api}${this.endPoints.swithChairType}${chairId}?typeNumber=${typeId}`);
  }

  createChair(model:CreateChair):Observable<ApiResponse<Chair>>{
    return this._http.post<ApiResponse<Chair>>(`${this.api}${this.endPoints.base}`,model);
  }
}