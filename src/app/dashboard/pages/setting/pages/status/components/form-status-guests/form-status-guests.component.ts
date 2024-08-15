import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GuestStatusService } from 'src/app/service/guest-status.service';
import { ValiationMethodes } from 'src/app/utils/validation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-status-guests',
  templateUrl: './form-status-guests.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./form-status-guests.component.css']
})
export class FormStatusGuestsComponent implements OnInit{
  form:FormGroup =new FormGroup({
  id: new FormControl(0, [Validators.required]),
  name:new FormControl('', [Validators.required]),
    nameAR:new FormControl('', [Validators.required]),
    color:new FormControl('#000000', [Validators.required]),
  });
  validation: ValiationMethodes;
  constructor(private guestStatus:GuestStatusService, private _toastr:ToastrService){}
  
 ngOnInit(): void {
  this.validation = new ValiationMethodes(this.form);
 }
 submit(){
  this.form.value.color = this.form.value.color.replace('#','');
  // console.log(this.form.value);
  this.guestStatus.Create(this.form.value).subscribe({
    next:(res)=>{
      this._toastr.success(res.message);
      this.form.reset();
      this.guestStatus.entities.push(res.response);
    },
    error:(err: HttpErrorResponse)=>{
    // console.log(err);
    this._toastr.error(err.error.message);
    }
  });
}
}
