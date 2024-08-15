import { Injectable } from '@angular/core';
import { GuestResponse,GusetReport,RegisterGuest,RegisterGuestToformData } from '../models/guest';
import { ApiResponse, Pagenation } from '../models/response';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  reportEndPoints = environment.endPoint.reportEndPoint;
  currentPage = 1;
  guestResponse: Pagenation<GuestResponse> = {
    pagination: {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      rowCount: 0,
    },
    data: [],
  };
  baseURL = environment.API_URL;
  endPoints = environment.endPoint.userEndPoints;
  constructor(private _http: HttpClient, private _toastr: ToastrService) {}

  guestFilter(
    page: number | null = null,
    pageSize: number | null = null,
    search: string | null = null
  ): Observable<Pagenation<GuestResponse>> {
    let query = '?';
    if (page) query += `&page=${page}`;
    if (pageSize) query += `&pageSize=${pageSize}`;
    if (search) query += `&search=${search}`;
    return this._http.get<Pagenation<GuestResponse>>(
      `${this.baseURL}${this.endPoints.guestSearch}${query}`
    );
  }


  getPage(
    page: number | null = null,
    pageSize: number | null = null,
    search: string | null = null
  ) {
    if (page) this.currentPage = page;
    this.guestFilter(page, pageSize, search).subscribe({
      next: (res) => {
        //console.log(res);
        this.guestResponse = res;
      },
      error: (err: HttpErrorResponse) => {
        this._toastr.error(err.error.message);
// console.log(err);
      },
    });
  }

  changeActive(email: string) {
    return this._http.get(`${this.baseURL}${this.endPoints.activate}${email}`);
  }
  deleteGuest(email: string) {
    return this._http.delete(`${this.baseURL}${this.endPoints.base}/${email}`);
  }

  registerGuest(model: RegisterGuest): Observable<ApiResponse<any>> {
    return this._http.post<ApiResponse<any>>(
      `${this.baseURL}${this.endPoints.guestRegister}`,
      RegisterGuestToformData(model)
    );
  }
  guestReportPagenatin: Pagenation<GusetReport> = {
    pagination: {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      rowCount: 0,
    },
    data: [],
  };
  search: string | null;
  statusId: string | null;
  getGuestReport(
    search: string | null,
    statusId: string | null,
    page: number=1,
    pageSize: number=20
  ): Observable<Pagenation<GusetReport>> {
    let query: string = '';
    if (search) query += `&search=${search}`;
    if (statusId) query += `&statusId=${statusId}`;
    if (page) query += `&page=${page}`;
    if (pageSize) query += `&pageSize=${pageSize}`;
    return this._http.get<Pagenation<GusetReport>>(
      `${this.baseURL}${this.reportEndPoints.guest}?${query}`
    );
  }

  getGuestReportPagenation(page:number = 1){
    this.getGuestReport(this.search,this.statusId,page).subscribe({
      next:(res)=>{
        //console.log(res);
        this.guestReportPagenatin = res;
      }
    });
  }
}
