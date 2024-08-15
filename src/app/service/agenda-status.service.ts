import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Status } from '../models/status';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgendaStatusService extends BaseService<Status>{

  constructor(private _http:HttpClient) {
    super(_http, environment.endPoint.agendaStatusEndPoint.base)
   }
}
