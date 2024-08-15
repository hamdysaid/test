import { OnInit, Component  ,
   ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,} from '@angular/core';
  import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {
  startOfDay,
  endOfDay,
  startOfMonth,
  subDays,
  addDays,
  endOfMonth,
  endOfWeek,
  startOfWeek,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { AgendaService } from 'src/app/service/agenda.service';
import { StateMachineService } from 'src/app/service/state-machine.service';
import { ToastrService } from 'ngx-toastr';
import { Agenda } from 'src/app/models/agenda';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-calender',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calender.component.html',
  styleUrls: ['../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css','./calender.component.css']
})
export class CalenderComponent  implements OnInit {
  language:string;
  imagePath = environment.imageEndPoint;
  eventId = 0;
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

  constructor(private _toastr:ToastrService, private _agendaService:AgendaService,private modal: NgbModal,protected _stateMachineService:StateMachineService) {
    this.language = localStorage.getItem("lang") || "en";
  }  
  
  getAgenda(){
    const yearStart = this._agendaService.dateStart.getFullYear();
      const monthStart = (this._agendaService.dateStart.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed, so add 1
      const dayStart = this._agendaService.dateStart.getDate().toString().padStart(2, '0');
      const yearEnd = this._agendaService.dateEnd.getFullYear();
      const monthEnd = (this._agendaService.dateEnd.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed, so add 1
      const dayEnd = this._agendaService.dateEnd.getDate().toString().padStart(2, '0');
      this._agendaService.getAgendaFilter(`${yearStart}-${monthStart}-${dayStart}`,`${yearEnd}-${monthEnd}-${dayEnd}`).subscribe({
        next:(res)=>{
          this._agendaService.entities = [];
          this.events = [];
          // console.log(res.response);
          this._agendaService.entities = res.response;
          this._agendaService.entities.forEach(date =>{
            // console.log(date);
            this.events.push(
              {
                id: date.id,
                start: addHours(startOfDay(new Date(date.dateTimeStart)), +date.startHour.split(':')[0]),
                end: addHours(startOfDay(new Date(date.dateTimeEnd)), +date.endHour.split(':')[0]),
                title: `${date.name}`,
                color: { ...this.colors['yellow'] },
                actions: this.actions,
                resizable: {
                  beforeStart: false,
                  afterEnd: false,
                },
                draggable: false,
              },
            );
          });
          
          this.refresh.next();
        }
      });
  }

  ngOnInit(): void {
    this.getAgenda();
  }

  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;
  @ViewChild('modalDetails', { static: true }) modalDetails: TemplateRef<any>;
  
  colors: Record<string, EventColor> = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  view: CalendarView = CalendarView.Day;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fas fa-fw fa-eye"></i>',
      a11yLabel: 'View',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Detail', event);
      },
    },
    {
      label: '<i class="fas fa-fw fa-trash-alt"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.eventId = +event.id!; 
        this.handleEvent('Deleted', event);
      },
    },
  ];

  refresh = new Subject<void>();

  events: CalendarEvent[] = [];

  activeDayIsOpen: boolean = true;

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
        if(action == "Clicked" || action == "Detail")
        {
          this.modal.open(this.modalDetails,{size:'lg'});
          this.agenda = this._agendaService.entities.find(x=> x.id == +event.id!)!;
          // console.log(this.agenda);
          return;
        }
        if(action == "Deleted")
          this.modal.open(this.modalContent);
  }

  addEvent(): void {
    this.events = [
      ...this.events,
      {
        title: 'New event',
        start: startOfDay(new Date()),
        end: endOfDay(new Date()),
        color: this.colors['red'],
        draggable: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
      },
    ];
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.closeOpenMonthViewDay();
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
    // console.log(this.viewDate);
    this._agendaService.dateStart = startOfMonth(this.viewDate);
    this._agendaService.dateEnd = endOfMonth(this.viewDate);
    // console.log(this._agendaService.dateStart);
    // console.log(this._agendaService.dateEnd);
    this.getAgenda();
  }

  delete(){
    if(this.eventId == 0)
    return;
    this._agendaService.DeleteById(this.eventId).subscribe({
      next:(res)=>{
        this.events.splice(this.events.findIndex(x=> x.id == this.eventId),1);
        this.refresh.next();
        this._toastr.success(res.message);
        // console.log(res);
        this.eventId = 0;
        this.modal.dismissAll();
      },
      error:(err)=>{
        this._toastr.error(err.error.message);
      }
    });
  }
}
