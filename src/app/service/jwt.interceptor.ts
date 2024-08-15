import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _userService: UserService) { }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const lang = localStorage.getItem("lang") || 'en';
    const langheader = request.clone({
      headers: request.headers.set('Accept-Language', lang)
    });
    const token = this._userService.getToken();
    if (token) {
      const authRequest = langheader.clone({
        headers: langheader.headers.set('Authorization', `Bearer ${this._userService.getToken()}`)
      });
      if (!environment.production) console.log(authRequest);
      return next.handle(authRequest);
    }
    if (!environment.production) console.log(langheader);
    return next.handle(langheader);
  }
}
