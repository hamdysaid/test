import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Volunteer } from 'src/app/models/volunteer';
import { PopupService } from 'src/app/service/popup.service';
import { VolunteerStatusService } from 'src/app/service/volunteer-status.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-form-status-volunteer',
  templateUrl: './form-status-volunteer.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./form-status-volunteer.component.css']
})
export class FormStatusVolunteerComponent implements OnInit{
  form:FormGroup =new FormGroup({
  id: new FormControl(0, [Validators.required]),
  name:new FormControl('', [Validators.required]),
    nameAR:new FormControl('', [Validators.required]),
    color:new FormControl('#000000', [Validators.required]),
  });
  validation: ValiationMethodes;

  constructor(
    private volunteerStatus:VolunteerStatusService,
     private _toastr:ToastrService,
     protected _popup:PopupService<Volunteer>) { }
  ngOnInit(): void {
    this.validation = new ValiationMethodes(this.form);
  }

  submit(){
    this.form.value.color = this.form.value.color.replace('#','');
    // console.log(this.form.value);
    this.volunteerStatus.Create(this.form.value).subscribe({
      next:(res)=>{
        this._toastr.success(res.message);
        this.form.reset();
        this.volunteerStatus.entities.push(res.response);
      },
      error:(err: HttpErrorResponse)=>{
      // console.log(err);
      this._toastr.error(err.error.message);
      }
    });
  }


}
