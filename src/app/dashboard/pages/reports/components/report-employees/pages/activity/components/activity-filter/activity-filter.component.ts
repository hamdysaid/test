import { Component } from '@angular/core';

@Component({
  selector: 'app-activity-filter',
  templateUrl: './activity-filter.component.html',
  styleUrls: ['../../../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './activity-filter.component.css']
})
export class ActivityFilterComponent {
  language:string;
 constructor(){
  this.language = localStorage.getItem("lang") || "en";
 }
}
