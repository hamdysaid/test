import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Status } from '../models/status';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChairStatusService extends BaseService<Status> {

  constructor(private _http:HttpClient) {
    super(_http, environment.endPoint.chairStatusEndPoint.base);
   }
}
