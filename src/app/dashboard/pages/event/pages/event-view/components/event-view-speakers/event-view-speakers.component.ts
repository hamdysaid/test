import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventSpeakers } from 'src/app/models/event';
import { ApiResponse } from 'src/app/models/response';
import { EventSpeakersService } from 'src/app/service/event-speakers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-view-speakers',
  templateUrl: './event-view-speakers.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-view-speakers.component.css']
})
export class EventViewSpeakersComponent implements OnInit{
  @Input() EventId:number;
  imgPath = environment.imageEndPoint.normal;
eventSpeackers$:Observable<ApiResponse<EventSpeakers[]>>;
constructor(private _eventSpeackersService:EventSpeakersService) {}
  ngOnInit(): void {
    this.eventSpeackers$ = this._eventSpeackersService.getByEventId(this.EventId);
  }

}
