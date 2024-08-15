import { Component } from '@angular/core';

@Component({
  selector: 'app-event-color',
  templateUrl: './event-color.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-color.component.css']
})
export class EventColorComponent {
  language:string;
  constructor(){
    this.language = localStorage.getItem("lang") || "en";
  }

}
