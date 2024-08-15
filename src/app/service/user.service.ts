import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {
  AuthResponse,
  ChangePassword,
  // ChangePasswordToFormData,
  EmployeeRegister,
  // EmployeeRegisterToFormData,
  LoginRequest,
  Token,
  // UserLogInToFormData,
  UserResponse,
  UserResponseData,
  UserResponseToFormData,
} from '../models/auth';
import { Observable } from 'rxjs';
import {
  VolunteerSearchPagenation,
  VolunteerSearchPagenationToFormData,
} from '../models/user-pagenation';
import { Pagenation } from '../models/response';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  volunteerResponse: Pagenation<UserResponseData> = {
    pagination: {
      currentPage: 0,
      pageCount: 0,
      pageSize: 0,
      rowCount: 0
    },
    data: []
  };
  volunteerSearchPagenation: VolunteerSearchPagenation = {
    sortDirection: null,
    start: null,
    degreeId: null,
    search: null,
    page: 1,
    statusIdAsString: null,
    pageSize: 10,
    sortColumn: null,
    workPlace: null,
    daysAsString: null,
    end: null,
    principalityId: null,
    genderId: null,
    age: null
  };
  volunteerSearchPagenationHome: VolunteerSearchPagenation = {
    sortDirection: null,
    start: null,
    degreeId: null,
    search: null,
    page: 1,
    statusIdAsString: null,
    pageSize: 5,
    sortColumn: null,
    workPlace: null,
    daysAsString: null,
    end: null,
    principalityId: null,
    genderId: null,
    age: null
  };
  showSpinner = true;
  private baseUrl = environment.API_URL;
  private endPoints = environment.endPoint.userEndPoints;
  constructor(private _http: HttpClient, protected _toastr: ToastrService) { }

  isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) return false;

    const expiration = localStorage.getItem('token-expiration')!;
    const expirationDate = new Date(expiration);

    if (expirationDate <= new Date()) {
      this.logout();
      return false;
    }

    return true;
  }

  changeAvailable(email: string) {
    return this._http.get(`${this.baseUrl}${this.endPoints.activate}${email}`);
  }

  getFieldFromJWT(field: string) {
    const token = localStorage.getItem('token');
    if (!token) return '';
    const dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[field];
  }

  deleteUser(email: string) {
    return this._http.delete(`${this.baseUrl}${this.endPoints.base}/${email}`);
  }

  isUserAdmin() {
    const role: any[] = this.getFieldFromJWT(
      'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    );
    if (typeof role === 'string') if (role == 'SuperAdmin') return true;

    if (Array.isArray(role)) if (role.find((x) => x == 'SuperAdmin')) return true;

    return false;
  }

  isInRole(role: string) {
    const roles: any[] = this.getFieldFromJWT(
      'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
    );
    if (typeof roles === 'string') if (roles == role) return true;

    if (Array.isArray(roles)) if (roles.find((x) => x == role)) return true;

    return false;
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('token-expiration');
    localStorage.removeItem('user~policy');
  }

  loginUser(userForAuth: LoginRequest): Observable<AuthResponse<UserResponse>> {
    return this._http.post<AuthResponse<UserResponse>>(
      `${this.baseUrl}${this.endPoints.login}`,
      userForAuth
      // UserLogInToFormData(userForAuth)
    );
  }

  saveToken(authResponse: AuthResponse<UserResponse>) {
    localStorage.setItem('token', authResponse.token.token);
    localStorage.setItem(
      'token-expiration',
      authResponse.token.expiration.toString()
    );
    localStorage.setItem('user~policy', JSON.stringify(authResponse.token.userPolicy));
  }
  saveFromQuery(token: string) {
    if (localStorage.getItem("token") && new Date(localStorage.getItem("token-expiration") ?? "") < new Date())
      return;
    localStorage.setItem('token', token);
    localStorage.setItem(
      'token-expiration',
      new Date().setHours(3).toString()
    );
  }
  getToken() {
    return localStorage.getItem('token');
  }

  registerEmployee(model: EmployeeRegister): Observable<any> {
    return this._http.post(
      `${this.baseUrl}${this.endPoints.employeeRegister}`,
      // EmployeeRegisterToFormData(model)
      model
    );
  }

  getCurrentUserData(): Observable<UserResponse> {
    return this._http.get<UserResponse>(
      `${this.baseUrl}${this.endPoints.base}`
    );
  }

  updateEmployee(userResponse: UserResponse) {
    return this._http.put(
      `${this.baseUrl}${this.endPoints.employeeUpdateProfile}`,
      UserResponseToFormData(userResponse)
    );
  }

  changePassword(model: ChangePassword) {
    return this._http.put(
      `${this.baseUrl}${this.endPoints.changePassword}`,
      // ChangePasswordToFormData(model)
      model
    );
  }

  VolunteerFilter(model: VolunteerSearchPagenation): Observable<Pagenation<UserResponseData>> {
    return this._http.post<Pagenation<UserResponseData>>(
      `${this.baseUrl}${environment.endPoint.userEndPoints.volunteerFilter}`,
      VolunteerSearchPagenationToFormData(model)
    );
  }

  VolunteerViewDetail(email: string): Observable<UserResponse> {
    return this._http.get<UserResponse>(`${this.baseUrl}${this.endPoints.volunteerDetails}${email}`);
  }

  getPage(pageNumber: number, model: VolunteerSearchPagenation | null = this.volunteerSearchPagenation) {
    if (!model) model = this.volunteerSearchPagenation;
    model.page = pageNumber;
    this.VolunteerFilter(model)
      .subscribe({
        next: (res) => {
          //console.log(res);
          this.volunteerResponse = res;
        },
        error: (err: HttpErrorResponse) => {
          this._toastr.error(err.error.message);
          // console.log(err);
        }
      });
  }

  getAll(model: VolunteerSearchPagenation | null = this.volunteerSearchPagenation) {
    if (!model) model = this.volunteerSearchPagenation;
    this.VolunteerFilter(model)
      .subscribe({
        next: (res) => {
          //console.log(res);
          this.volunteerResponse = res;
        },
        error: (err: HttpErrorResponse) => {
          this._toastr.error(err.error.message);
          // console.log(err);
        }
      });

  }

  hasUserPolicy(policy: keyof Token['userPolicy']) {
    const userPolicySting = localStorage.getItem('user~policy');
    if (userPolicySting) {
      const userPolicy: Token['userPolicy'] = JSON.parse(userPolicySting);
      return userPolicy[policy];
    }
    return false;
  }

  otpConfirm(otp: { email: string, code: string }) {
    // const url = new URL(`${this.baseUrl}${this.endPoints.UserConfirmCode}${otp.code}`);
    // url.searchParams.append('email', otp.email);
    // return this._http.get(url.toString());
    return this._http.post(`${this.baseUrl}${this.endPoints.UserConfirmCode}`, otp);
  }
}

