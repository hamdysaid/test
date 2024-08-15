import { Component, Input } from '@angular/core';
import { UserResponse } from 'src/app/models/auth';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-volunteer-view-box',
  templateUrl: './volunteer-view-box.component.html',
  styleUrls: ['../../../volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css','./volunteer-view-box.component.css']
})
export class VolunteerViewBoxComponent {
  img = '../../../../../../../../assets/images/newVolunteer.svg';
  imgPath = environment.imageEndPoint;
  language:string;
  constructor(){
    this.language = localStorage.getItem("lang") || "en";
  }
@Input() userResponse:UserResponse;

  contain(day:number):boolean{
    let date = this.userResponse.classDateTimes?.find(c=> c.day == day);
    if(date)return true;
    return false;
  }
}
