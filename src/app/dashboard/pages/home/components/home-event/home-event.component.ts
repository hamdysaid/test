import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Event } from 'src/app/models/event';
import { ApiResponse, Pagenation } from 'src/app/models/response';
import { EventService } from 'src/app/service/event.service';
import { UserService } from 'src/app/service/user.service';
import { RoleSD } from 'src/app/utils/role';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-event',
  templateUrl: './home-event.component.html',
  styleUrls: ['./home-event.component.css']
})
export class HomeEventComponent implements OnInit{
  empEvent$: Observable<ApiResponse<Event[]>>;
  allEvent$: Observable<ApiResponse<Pagenation<Event>>>;
  roles = RoleSD.superAdmin;
  imgPath = environment.imageEndPoint.normal;
  language:string;
  constructor(private _eventService:EventService, protected _userService:UserService) {
    this.language = localStorage.getItem("lang") || "en";
  }
  ngOnInit(): void {
    this.empEvent$ = this._eventService.getEventEmployee(localStorage.getItem("email")!).pipe(tap({
      next:(res)=>{
    //console.log(res);
      }
    }));
    this.allEvent$ = this._eventService.Get(1,1).pipe(tap({
      next:(res)=>{
        //console.log(res);
      }
    }));
  }

}
