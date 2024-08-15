import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Degree } from '../models/degree';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DegreeService extends BaseService<Degree> {

  constructor(protected _http:HttpClient) {
    super(_http, environment.endPoint.degreeEndPoint.base);
  }
}
