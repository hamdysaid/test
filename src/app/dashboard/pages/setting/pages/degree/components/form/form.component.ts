import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DegreeService } from 'src/app/service/degree.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./form.component.css']
})
export class FormComponent implements OnInit {
  form:FormGroup;
  validation:ValiationMethodes;
  constructor(private _degreeService:DegreeService,
    private _toastr:ToastrService) {  }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      nameAR: new FormControl('', Validators.required)
    });
    this.validation = new ValiationMethodes(this.form);
  }

  submit(){
    this._degreeService.Create(this.form.value).subscribe({
      next:(res)=>{
        this._toastr.success(res.message);
        this.form.reset();
 // console.log(res.response);
    this._degreeService.entities.push(res.response);
      },
      error:(err)=>{
        this._toastr.error(err.error.message);
// console.log(err);
      }
    });
  }
}
