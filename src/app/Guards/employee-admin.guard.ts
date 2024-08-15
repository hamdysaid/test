import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { RoleSD } from '../utils/role';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAdminGuard implements CanActivate, CanActivateChild {
  constructor(private _userService: UserService, private _routr: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._userService.isAuthenticated() && (this._userService.isInRole(RoleSD.employee) || this._userService.isUserAdmin())) {
      return true;
    }
 // console.log("canActivateChild:" + this._userService.isAuthenticated() + ":" + (this._userService.isInRole(RoleSD.employee) || this._userService.isUserAdmin()));

    const queryParams = { url: state.url };
    this._userService.logout();
    this._routr.navigate([`/`], { queryParams: queryParams });
    return false;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this._userService.isAuthenticated() && (this._userService.isInRole(RoleSD.employee) || this._userService.isUserAdmin())) {
      return true;
    }
    const queryParams = { url: state.url };
    this._userService.logout();
    this._routr.navigate([`/`], { queryParams: queryParams });
    return false;
  }

}
