import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EventSpeakersService } from 'src/app/service/event-speakers.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-event-speaker-form',
  templateUrl: './event-speaker-form.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-speaker-form.component.css']
})
export class EventSpeakerFormComponent {
  img ='.../../../../../../../../assets/images/uploadImage.svg';
  eventSpeakerForm: FormGroup;
  validation: ValiationMethodes;
  loading =false;
  language:string;
  constructor(
    private _eventSpeakersService: EventSpeakersService,
    private _toastrService:ToastrService
    ) {
      this.language = localStorage.getItem("lang") || "en";
    }
  
  ngOnInit(): void {
    this.eventSpeakerForm = new FormGroup({
      fullName:    new FormControl('', [Validators.required]),
      fullNameAR:    new FormControl('', [Validators.required]),
      specialization:      new FormControl('',   [Validators.required]),
      specializationAR:      new FormControl('',   [Validators.required]),
      image:        new FormControl('',   [Validators.required]),
      imageFile:    new FormControl(null, [Validators.required]),
      eventId:    new FormControl()
    });

    this.validation = new ValiationMethodes(this.eventSpeakerForm);
  }

  submit(){
    if(!localStorage.getItem("eventId"))
    {
      this._toastrService.error("There Is No Event");
      return;
    }
    this.eventSpeakerForm.value.eventId= +localStorage.getItem("eventId")!;
    this.loading = true;
    
    this._eventSpeakersService.Create(this.eventSpeakerForm.value).subscribe({
      next:(res)=>{
        //console.log(res);
        this._eventSpeakersService.entities.push(res.response);
        this._toastrService.success(res.message);
        this.img ='.../../../../../../../../assets/images/uploadImage.svg';
        this.eventSpeakerForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        // console.log(error);
        this._toastrService.error(error.error.message);
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
      this.eventSpeakerForm.patchValue({
        imageFile: file,
      });
    }
  }
}
