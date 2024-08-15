import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventSchedules } from 'src/app/models/event';
import { ApiResponse } from 'src/app/models/response';
import { EventSchedulesService } from 'src/app/service/event-schedules.service';

@Component({
  selector: 'app-event-view-schedule',
  templateUrl: './event-view-schedule.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-view-schedule.component.css']
})
export class EventViewScheduleComponent implements OnInit{
  @Input() EventId:number;
  eventSchedule$:Observable<ApiResponse<EventSchedules[]>>;
  constructor(private _eventScheduleService:EventSchedulesService) {}
    ngOnInit(): void {
      this.eventSchedule$ = this._eventScheduleService.getByEventId(this.EventId);
    }
}
