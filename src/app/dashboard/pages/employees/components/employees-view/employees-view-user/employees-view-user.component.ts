import { Component, Input } from '@angular/core';
import { EmployeeResponse } from 'src/app/models/employee-response';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employees-view-user',
  templateUrl: './employees-view-user.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './employees-view-user.component.css']
})
export class EmployeesViewUserComponent {
  imagePath = environment.imageEndPoint;
  @Input() Employee:EmployeeResponse;
  language:string;
  constructor(){
    this.language = localStorage.getItem("lang") || "en";
  }

}
