import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';
import { EventSchedules } from 'src/app/models/event';
import { ApiResponse } from 'src/app/models/response';
import { EventSchedulesService } from 'src/app/service/event-schedules.service';
import { ValiationMethodes } from 'src/app/utils/validation';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-event-schedule',
  templateUrl: './event-schedule.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-schedule.component.css']
})
export class EventScheduleComponent implements OnInit, OnDestroy{
  evendId: number;
  validation:ValiationMethodes;
  img:string|null = null;
  loading:boolean= false;
  language:string;
  getByIdEvent$: Observable<ApiResponse<EventSchedules>>; 
  @ViewChild('updateScheduleModal',{static:true}) updateScheduleModal :TemplateRef<any>;
  constructor(protected _eventScheduleService:EventSchedulesService,
              private _toastr:ToastrService,
              private _routr:Router,
              protected _modal:NgbModal , private trans: TranslateService ) {
                this.language = localStorage.getItem("lang") || "en";
  }
  ngOnDestroy(): void {
    this._eventScheduleService.entities = [];
  }
  ngOnInit(): void {
    if(localStorage.getItem("eventId") == null){
      this._routr.navigate(['../']);
    }
    this.evendId = +localStorage.getItem("eventId")!;
        this._eventScheduleService.getByEventId(this.evendId).subscribe({
          next:(res)=>{
            this._eventScheduleService.entities = res.response;
            //console.log(res);
          }
        });
  }

  deleteItem(id:number) {
    Swal.fire({
      title: this.trans.instant('Are you sure?'),
      text: this.trans.instant('Delete confirmation - All related information will be deleted.'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: this.trans.instant('Yes'),
      confirmButtonColor:'#930303',
      cancelButtonText: this.trans.instant('No')
    }).then((result) => {
      if (result.isConfirmed) {
        this._eventScheduleService.DeleteById(id).subscribe({
        next:(res)=>{ 
        let index=  this._eventScheduleService.entities.findIndex(x=> x.id == id );
        this._eventScheduleService.entities.splice(index,1);
        this._toastr.success(this.trans.instant('Delete Successfuly'));
      },
          error:(err)=>{
            this._toastr.error(err.error.message);
          }
        });
        // Show success message
        //Swal.fire(
        //  'Deleted!',
        //  'Your item has been deleted.',
        //  'success'
        //);
      }
    });
  } 

  updateScheduleFrom:FormGroup = new FormGroup({
    eventId: new FormControl(0, [Validators.required]),
    id: new FormControl(0, [Validators.required]),
    startHour: new FormControl(null, [Validators.required]),
    endHour: new FormControl(null, [Validators.required]),
    description: new FormControl('',[Validators.required]),
    descriptionAR: new FormControl('',[Validators.required]),
  });

  clickToUpdateSchedule(id:number){
    // console.log(id);
    this._modal.open(this.updateScheduleModal).result.then((res)=>{
    },(reasn)=>{this.img = null;});
    this.getByIdEvent$ = this._eventScheduleService.GetByIdAll(id).pipe(tap({
      next:(res)=>{
        //console.log(res);
        this.updateScheduleFrom.patchValue({
              id : res.response.id,
              eventId: res.response.eventId,
              startHour : res.response.startHour,
              endHour : res.response.endHour,
              description : res.response.description,
              descriptionAR : res.response.descriptionAR,
         });
        // console.log(this.updateScheduleFrom.value);
      }
    }));
    this.validation = new ValiationMethodes(this.updateScheduleFrom);
}
   submit(){
    if(!localStorage.getItem("eventId"))
    {
      this._toastr.error("There Is No Event");
      return;
    }
      if(!this.updateScheduleFrom.value.startHour.match(":00"))
        this.updateScheduleFrom.value.startHour+= ":00";
      if(!this.updateScheduleFrom.value.endHour.match(":00"))
          this.updateScheduleFrom.value.endHour+= ":00";
      this.loading = true;
      this._eventScheduleService.Update(this.updateScheduleFrom.value).subscribe({
        next:(res)=>{
          let schedule = this._eventScheduleService.entities.findIndex(s=> s.id == res.response.id);
          this._eventScheduleService.entities[schedule] = res.response;
          //console.log(res);
        // console.log(schedule);
        // console.log(this._eventScheduleService.entities);
          this._toastr.success(res.message);
          this.updateScheduleFrom.reset();
          this._modal.dismissAll();
        },
        error:(error:HttpErrorResponse)=>{
          // console.log(error);
          this._toastr.error(error.error.message);
          this.updateScheduleFrom.value.startHour.substring(0,5);
          this.updateScheduleFrom.value.endHour.substring(0,5);
        },
        complete:()=>{
          this.loading = false;
        }
      });
    }
}
