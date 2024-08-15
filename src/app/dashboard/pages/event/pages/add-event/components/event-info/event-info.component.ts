import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ApiResponse, Pagenation } from 'src/app/models/response';
import { Status } from 'src/app/models/status';
import { EventStatusService } from 'src/app/service/event-status.service';
import { EventService } from 'src/app/service/event.service';
import { StateMachineService } from 'src/app/service/state-machine.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-info.component.css']
})
export class EventInfoComponent {
  img ='.../../../../../../../../assets/images/uploadImage.svg';
  eventForm: FormGroup;
  validation: ValiationMethodes;
  loading:boolean = false;
  done : boolean = false;
  language:string;
stauses$:Observable<ApiResponse<Pagenation<Status>>> ;
  constructor(
    private _eventService: EventService,
    private _toastrService:ToastrService,
    private _eventStatusService:EventStatusService,
    private _stateMachineService:StateMachineService
    ) {
      this.language = localStorage.getItem("lang") || "en";
    }
  
  ngOnInit(): void {
    this.eventForm = new FormGroup({
      name:         new FormControl('',  [Validators.required]),
      nameAR:         new FormControl('',[Validators.required]),
      description:  new FormControl('',   [Validators.required]),
      descriptionAR:  new FormControl('', [Validators.required]),
      locationHint: new FormControl('',   [Validators.required]),
      locationLink: new FormControl('',   [Validators.required]),
      startHour:    new FormControl('', [Validators.required]),
      endHour:      new FormControl('',   [Validators.required]),
      hallImage:    new FormControl(null),
      hallImageFile:new FormControl(null, [Validators.required]),
      startDate:    new FormControl(null, [Validators.required]),
      endDate:      new FormControl(null, [Validators.required]),
      statusId:     new FormControl(6, [Validators.required]),
    });
    this.stauses$ = this._eventStatusService.Get();
    this.validation = new ValiationMethodes(this.eventForm);
  }

  submit(){
    this.loading = true;
    this.eventForm.value.startHour+= ':00';
    this.eventForm.value.endHour+= ':00';
    // console.log(this.eventForm.value);
    this._eventService.Create(this.eventForm.value).subscribe({
      next:(res)=>{
        this._toastrService.success(res.message);
        //console.log(res);
        this.eventForm.reset();
        this.img ='.../../../../../../../../assets/images/uploadImage.svg';
        this.loading = false;
        this.done = true;
        localStorage.setItem("eventId", `${res.response.id}`);
        this._stateMachineService.ShowAddEvent(true);
  },
      error:(error:HttpErrorResponse)=>{
        if(error.status == 403)
        this._toastrService.error("Un authorized");
        else
        this._toastrService.error(error.error.message);
        this.loading = false;
        // console.log(error);
      }
    });
  }

  onFileChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files!;
    if (files.length > 0) {
      const file = files[0];
      // console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.img = reader.result as string;
      };
      this.eventForm.patchValue({
        hallImageFile: file,
      });
    }
  }
}