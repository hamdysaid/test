import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { Department } from '../models/department';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends BaseService<Department>{

  constructor(protected _http:HttpClient) {
    super(_http, environment.endPoint.departmentEndPoint.base);
   }
}
