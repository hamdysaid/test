import { Component } from '@angular/core';
import { EventSpeakersService } from 'src/app/service/event-speakers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-event-speakers',
  templateUrl: './event-speakers.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css', './event-speakers.component.css']
})
export class EventSpeakersComponent {
  imagePath = environment.imageEndPoint;
  language: string;
  constructor(protected _eventSpeakersService: EventSpeakersService) {
    this.language = localStorage.getItem("lang") || "en";
  }
}
