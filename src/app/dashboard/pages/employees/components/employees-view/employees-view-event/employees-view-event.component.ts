import { Component, Input } from '@angular/core';
import { Event } from 'src/app/models/event';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employees-view-event',
  templateUrl: './employees-view-event.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './employees-view-event.component.css']
})
export class EmployeesViewEventComponent {
@Input() events: Event[];
imagePath:string = environment.imageEndPoint.normal;
}
