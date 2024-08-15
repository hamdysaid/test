import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResponse, Pagenation } from '../models/response';
import { Observable } from 'rxjs';
import {Notification} from 'src/app/models/notification';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  hubConnection: signalR.HubConnection;
  counter = 0;
  data:Pagenation<Notification> = {
    pagination: {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      rowCount: 0
    },
    data: []
  };
  baseApi = environment.API_URL;
  baseHubURL = environment.API_URL_HUB;
  endPoint = environment.endPoint.notification;

  constructor(private _http:HttpClient) { }
  
  ReadNotification(id:number){
    return this._http.get(`${this.baseApi}${this.endPoint.readNotification}${id}`);
  }

  NotificationUser(page:number = 1, pageSize:number = 10):Observable<ApiResponse<Pagenation<Notification>>>{
    return this._http.get<ApiResponse<Pagenation<Notification>>>(`${this.baseApi}${this.endPoint.user}?page=${page}&pageSize=${pageSize}`);
  }
  GetNotificationUser(page:number = 1){
    this.NotificationUser(page).subscribe({
      next:(res)=>{
        //console.log(res);
        this.data = res.response;
        this.counter = res.response.pagination.rowCount;
      }
    });
  }

  ConnectToNotificationHub(){
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(`${this.baseHubURL}${this.endPoint.hub}`,{ withCredentials: true })
    .build();

    this.hubConnection
    .start()
    .then(() => {
   // console.log('connection Started ...');
    })
    .catch(() => {
   // console.log(error);
    });

    this.ReciveNotfication();

  }

  ReciveNotfication(){
    this.hubConnection.on('ReceiveNotification', (msg) => {
   // console.log(msg);
    });
  }


}
