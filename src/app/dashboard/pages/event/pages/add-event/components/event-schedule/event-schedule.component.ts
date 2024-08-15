import { Component } from '@angular/core';
import { EventSchedulesService } from 'src/app/service/event-schedules.service';

@Component({
  selector: 'app-event-schedule',
  templateUrl: './event-schedule.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-schedule.component.css']
})
export class EventScheduleComponent {
  language:string;
constructor(protected _eventScheduleService:EventSchedulesService) {
  this.language = localStorage.getItem("lang") || "en";
}
}
