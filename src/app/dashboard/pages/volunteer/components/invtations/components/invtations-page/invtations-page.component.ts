import { Component} from '@angular/core';
import { StateMachineService } from 'src/app/service/state-machine.service';

@Component({
  selector: 'app-invtations-page',
  templateUrl: './invtations-page.component.html',
  styleUrls: ['../../../volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './invtations-page.component.css']
})
export class InvtationsPageComponent {

  constructor(protected _stateMachineService:StateMachineService){}

 
}

