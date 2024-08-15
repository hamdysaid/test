import { Component } from '@angular/core';
import { StateMachineService } from 'src/app/service/state-machine.service';

@Component({
  selector: 'app-volunteer-list-page',
  templateUrl: './volunteer-list-page.component.html',
  styleUrls: ['./volunteer-list-page.component.css']
})
export class VolunteerListPageComponent {
  constructor(protected _stateMachineService:StateMachineService){}
}
