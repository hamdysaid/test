import { Component, Input } from '@angular/core';
import { Agenda } from 'src/app/models/agenda';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employees-view-agenda',
  templateUrl: './employees-view-agenda.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './employees-view-agenda.component.css']
})
export class EmployeesViewAgendaComponent {
  imagePath = environment.imageEndPoint;
@Input() Agenda:Agenda[];
}
