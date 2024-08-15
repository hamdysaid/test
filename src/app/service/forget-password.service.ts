import { Injectable } from '@angular/core';
import { BaseService } from './repo/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserResponse, UserResponseData } from '../models/auth';

@Injectable({
    providedIn: 'root'
})
export class ForgetPasswordService {
    userEmail: string = "";
    private _baseURL = environment.API_URL;
    private _endPoint = environment.endPoint.forgetPassword;
    constructor(private _http: HttpClient) { }

    sendEmail(email: string) {
        this.userEmail = email;
        return this._http.get(`${this._baseURL}${this._endPoint.sendEmail}${email}`);
    }

    sendCode(code: string) {
        return this._http.get(`${this._baseURL}${this._endPoint.sendOTP}${this.userEmail}?code=${code}`);
    }

    sendPassword(password: string) {
        return this._http.post(`${this._baseURL}${this._endPoint.sendPassowrd}${this.userEmail}`, { password });
    }
}
