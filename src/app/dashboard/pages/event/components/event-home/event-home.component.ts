import { Component } from '@angular/core';

@Component({
  selector: 'app-event-home',
  templateUrl: './event-home.component.html',
  styleUrls: ['./event-home.component.css']
})
export class EventHomeComponent {
  language:string;
constructor(){
  this.language = localStorage.getItem("lang") || "en";
}
}
