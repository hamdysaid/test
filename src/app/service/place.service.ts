import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Place } from '../models/hall';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceService extends BaseService<Place>{
  constructor(protected _http:HttpClient) {
    super(_http, environment.endPoint.placeEndPoint.base)
  }
}
