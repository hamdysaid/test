import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventSponsors } from 'src/app/models/event';
import { ApiResponse } from 'src/app/models/response';
import { EventSponsorsService } from 'src/app/service/event-sponsors.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-view-sponsors',
  templateUrl: './event-view-sponsors.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-view-sponsors.component.css']
})
export class EventViewSponsorsComponent implements OnInit {
  @Input() EventId:number;
  imgPath = environment.imageEndPoint.normal;
  eventSponsor$:Observable<ApiResponse<EventSponsors[]>>;
  constructor(private _eventSponsorService:EventSponsorsService) {}
    ngOnInit(): void {
      this.eventSponsor$ = this._eventSponsorService.getByEventId(this.EventId);
    }
  
}
