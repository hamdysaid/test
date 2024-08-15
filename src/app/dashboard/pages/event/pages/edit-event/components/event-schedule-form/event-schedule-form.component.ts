import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventSchedulesService } from 'src/app/service/event-schedules.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-event-schedule-form',
  templateUrl: './event-schedule-form.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-schedule-form.component.css']
})
export class EventScheduleFormComponent implements OnInit {
  loading =false;
  eventSchedulesForm: FormGroup;
  validation: ValiationMethodes;
  language:string;

  constructor(
    private _eventScheduleService: EventSchedulesService,
    private _toastrService:ToastrService
    ) {
      this.language = localStorage.getItem("lang") || "en";
    }
  
  ngOnInit(): void {
    this.eventSchedulesForm = new FormGroup({
      description:  new FormControl('',   [Validators.required]),
      descriptionAR:  new FormControl('',   [Validators.required]),
      startHour:    new FormControl('', [Validators.required]),
      endHour:      new FormControl('',   [Validators.required]),
      eventId:      new FormControl(),
    });

    this.validation = new ValiationMethodes(this.eventSchedulesForm);
  }

  submit(){
    if(!localStorage.getItem("eventId"))
    {
      this._toastrService.error("There Is No Event");
      return;
    }
    this.eventSchedulesForm.value.eventId= +localStorage.getItem("eventId")!;
    this.loading = true;

    this.eventSchedulesForm.value.startHour+= ':00';
    this.eventSchedulesForm.value.endHour+= ':00';

    this._eventScheduleService.Create(this.eventSchedulesForm.value).subscribe({
      next:(res)=>{
        //console.log(res);
        this._eventScheduleService.entities.push(res.response);
        this._toastrService.success(res.message);
        this.eventSchedulesForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        // console.log(error);
        this._toastrService.error(error.error.message);
      },complete:()=>{
        this.loading = false;
      }
    });

  }
}
