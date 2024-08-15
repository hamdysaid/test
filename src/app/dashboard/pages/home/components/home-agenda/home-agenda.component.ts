import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agenda } from 'src/app/models/agenda';
import { AgendaService } from 'src/app/service/agenda.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home-agenda',
  templateUrl: './home-agenda.component.html',
  styleUrls: ['./home-agenda.component.css']
})
export class HomeAgendaComponent implements OnInit{
  agenda:Agenda = {
    name: '',
    nameAR: '',
    dateTimeEnd: '',
    dateTimeStart: '',
    description: '',
    descriptionAR: '',
    endHour: '',
    startHour: '',
    leaderId: '',
    leader: null,
    status: null,
    statusId: 0,
    emplyeeEmailsAsString: '',
    toDoEmployees: [],
    id: 0,
    createdAt: null,
    updatedAt: null,
    employees: []
  };
  @ViewChild('modalDetails', { static: true }) modalDetails: TemplateRef<any>;
  imagePath = environment.imageEndPoint;
  language:string;
  constructor(protected _agendaService:AgendaService,private modal: NgbModal) {
    this.language = localStorage.getItem("lang") || "en";
  }
  ngOnInit(): void {
    this._agendaService.dateEnd = new Date();
    this._agendaService.dateStart = new Date();
    this._agendaService.getAgendaFilterSubscripe();
  }
  onClick(id:number){
    this.agenda = this._agendaService.entities.find(x=> x.id == id)!;
    this.modal.open(this.modalDetails,{size: 'lg'});
  }
}
