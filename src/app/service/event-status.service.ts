import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './repo/base.service';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class EventStatusService  extends BaseService<Status>  {
  constructor(private _http:HttpClient) {
    super(_http, environment.endPoint.eventStatusEndPoint.base);
  }
}
