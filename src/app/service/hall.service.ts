import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Hall } from '../models/hall';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/response';
import { Observable } from 'rxjs';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class HallService extends BaseService<Hall>{
  endPoints = environment.endPoint.hallEndPoint;
  hubConnection: signalR.HubConnection
  hunURL = environment.API_URL_HUB + this.endPoints.chairHub;
  constructor(protected _http:HttpClient) {
    super(_http, environment.endPoint.hallEndPoint.base);
   }

   getHallbyEventId(eventId:number):Observable<ApiResponse<Hall>>{
    return this._http.get<ApiResponse<Hall>>(`${this.baseURL}${this.endPoints.hallEvent}${eventId}`);
   }

   ConnectToChairHub(){
    this.hubConnection  = new signalR.HubConnectionBuilder()
    .withUrl(`${this.hunURL}`,{ withCredentials: true })
    .build();

    this.hubConnection
    .start()
    .then(() => {
   // console.log('connection Started To ChairHub...');
    })
    .catch(() => {
   // console.log(error);
    });
  }

  ReceiveChairStatus(){
    this.hubConnection.on('ReceiveChairStatus', (msg) => {
   // console.log(msg);
    });
  }

}
