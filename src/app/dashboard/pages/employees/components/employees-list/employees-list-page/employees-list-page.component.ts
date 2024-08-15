import { Component } from '@angular/core';
import { StateMachineService } from 'src/app/service/state-machine.service';

@Component({
  selector: 'app-employees-list-page',
  templateUrl: './employees-list-page.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './employees-list-page.component.css']
})
export class EmployeesListPageComponent {
  constructor(protected _stateMachineService:StateMachineService){}
}
