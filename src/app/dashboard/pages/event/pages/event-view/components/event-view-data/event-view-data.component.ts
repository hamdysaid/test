import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from 'src/app/models/event';
import { ApiResponse } from 'src/app/models/response';
import { EventService } from 'src/app/service/event.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-view-data',
  templateUrl: './event-view-data.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css', './event-view-data.component.css']
})
export class EventViewDataComponent implements OnInit {
  @Input() EventId: number;
  event$: Observable<ApiResponse<Event>>;
  constructor(private _eventService: EventService) { }
  ngOnInit(): void {
    this.event$ = this._eventService.GetById(this.EventId);
  }
  validationUrl(response: ApiResponse<Event>) {
    return environment.imageEndPoint.normal + response.response.hallImage;
  }
}
