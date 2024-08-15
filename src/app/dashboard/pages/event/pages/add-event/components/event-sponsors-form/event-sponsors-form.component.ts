import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventSchedulesService } from 'src/app/service/event-schedules.service';
import { EventSpeakersService } from 'src/app/service/event-speakers.service';
import { EventSponsorsService } from 'src/app/service/event-sponsors.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-event-sponsors-form',
  templateUrl: './event-sponsors-form.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-sponsors-form.component.css']
})
export class EventSponsorsFormComponent {
  img ='.../../../../../../../../assets/images/uploadImage.svg';
  eventSponsorForm: FormGroup;
  validation: ValiationMethodes;
  loading =false;
  language:string;
  constructor(
    private _eventSponsorsService: EventSponsorsService,
    private _toastrService:ToastrService
    ) {
      this.language = localStorage.getItem("lang") || "en";
    }
  
  ngOnInit(): void {
    this.eventSponsorForm = new FormGroup({
      image:        new FormControl('',   [Validators.required]),
      name:        new FormControl(''),
      nameAR:        new FormControl(''),
      imageFile:    new FormControl(null, [Validators.required]),
      eventId:    new FormControl()
    });

    this.validation = new ValiationMethodes(this.eventSponsorForm);
  }

  submit(){
    if(!localStorage.getItem("eventId"))
    {
      this._toastrService.error("There Is No Event");
      return;
    }
    this.eventSponsorForm.value.eventId= +localStorage.getItem("eventId")!;
    this.loading = true;
    this.eventSponsorForm.value.name = "name";
    this.eventSponsorForm.value.nameAR = "الاسم";
    this._eventSponsorsService.Create(this.eventSponsorForm.value).subscribe({
      next:(res)=>{
        //console.log(res);
        this._eventSponsorsService.entitisFrCurrentEvent.push(res.response);
        this._toastrService.success(res.message);
        this.img ='.../../../../../../../../assets/images/uploadImage.svg';
        this.eventSponsorForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        // console.log(error);
        this._toastrService.error(error.error.message);
        this.loading = false;
      },
      complete:()=>{
        this.loading = false;
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
      this.eventSponsorForm.patchValue({
        imageFile: file,
      });
    }
  }
}
