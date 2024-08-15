import { Component, OnInit } from '@angular/core';
import { ValiationMethodes } from 'src/app/utils/validation';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventStatusService } from 'src/app/service/event-status.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-form-status-event',
  templateUrl: './form-status-event.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./form-status-event.component.css']
})
export class FormStatusEventComponent implements OnInit {
  form:FormGroup =new FormGroup({
  id: new FormControl(0, [Validators.required]),
  name:new FormControl('', [Validators.required]),
    nameAR:new FormControl('', [Validators.required]),
    color:new FormControl('#000000', [Validators.required]),
  });
  validation: ValiationMethodes;
  constructor(private eventStatus:EventStatusService, private _toastr:ToastrService){}
  
 ngOnInit(): void {
  this.validation = new ValiationMethodes(this.form);
 }
 submit(){
  this.form.value.color = this.form.value.color.replace('#','');
  // console.log(this.form.value);
  this.eventStatus.Create(this.form.value).subscribe({
    next:(res)=>{
      this._toastr.success(res.message);
      this.form.reset();
      this.eventStatus.entities.push(res.response);
    },
    error:(err: HttpErrorResponse)=>{
    // console.log(err);
    this._toastr.error(err.error.message);
    }
  });
}
}
