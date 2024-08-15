import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Gender } from '../models/gender';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenderService extends BaseService<Gender> {

  constructor(protected _http:HttpClient) {
    super(_http, environment.endPoint.genderEndPoint.base);
   }
}
