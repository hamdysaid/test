import { Component } from '@angular/core';
import { EventSponsorsService } from 'src/app/service/event-sponsors.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-sponsors',
  templateUrl: './event-sponsors.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css', './event-sponsors.component.css']
})
export class EventSponsorsComponent {
  imagePath = environment.imageEndPoint;
  language: string;
  constructor(
    protected _eventSponsorsService: EventSponsorsService,
  ) {
    this.language = localStorage.getItem("lang") || "en";
  }
}
