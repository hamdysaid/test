import { Injectable } from '@angular/core';
import { ApiResponse, Pagenation } from '../models/response';
import { EmployeeResponse, SearchForEmployee } from '../models/employee-response';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserResponse } from '../models/auth';
import { EmployeeChart } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  employeeResponse: Pagenation<EmployeeResponse> = {
    pagination: {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      rowCount: 0
    },
    data: []
  };
    baseURL = environment.API_URL;
    endPoints = environment.endPoint.userEndPoints;
    searchForEmployee:SearchForEmployee = {
    search: null,
    principalityId: null,
    start: null,
    end: null,
    isActive: true,
    departmentId: null,
    page: 1,
    pageSize: 10
  };
  constructor(private _http: HttpClient, private _toastr:ToastrService) { }
  getAllEmployee(){
    return this._http.get<UserResponse[]>(`${this.baseURL}${this.endPoints.employee}`);
  }
  employeeFilter(model: SearchForEmployee):Observable<Pagenation<EmployeeResponse>> {
    return this._http.post<Pagenation<EmployeeResponse>>(
      `${this.baseURL}${environment.endPoint.userEndPoints.employeeSearch}`, model);
  }
  getPage(pageNumber: number, model: SearchForEmployee | null = this.searchForEmployee){
    if(!model) model = this.searchForEmployee;
    model.page = pageNumber;
    this.employeeFilter(model)
    .subscribe({
      next:(res)=>{
        //console.log(res);
        this.employeeResponse = res;
      },
      error:(err:HttpErrorResponse)=>{
        this._toastr.error(err.error.message);
// console.log(err);
      }
    });
    
  }

  changeActive(email:string){
    return this._http.get(`${this.baseURL}${this.endPoints.activate}${email}`);
  }
  deleteUser(email:string){
    return this._http.delete(`${this.baseURL}${this.endPoints.base}/${email}`);
  }

  getEmployeeDetails(email:string):Observable<ApiResponse<EmployeeResponse>>{
    return this._http.get<ApiResponse<EmployeeResponse>>(`${this.baseURL}${this.endPoints.employeeDetails}${email}`);
  }

  getchartEmployee(email:string):Observable<EmployeeChart>{
    return this._http.get<EmployeeChart>(`${this.baseURL}${environment.endPoint.detail.chartEmployee}?email=${email}`);
  }
}
