import { OnInit,Component } from '@angular/core';
import { AgendaService } from 'src/app/service/agenda.service';
import { StateMachineService } from 'src/app/service/state-machine.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css','./page.component.css']
})
export class PageComponent{
  constructor(protected _stateMachineService:StateMachineService){}

}