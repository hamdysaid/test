import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { PrincipalityService } from 'src/app/service/principality.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./form.component.css']
})
export class FormComponent implements OnInit {
form:FormGroup;
validation: ValiationMethodes;
  constructor(private _princeService: PrincipalityService, private _toastr:ToastrService) {}
  
  ngOnInit(): void {
    this.form = new FormGroup({
      id:new FormControl(0),
      name: new FormControl('',[Validators.required]),
      nameAR: new FormControl('',[Validators.required]),
    });
    this.validation = new ValiationMethodes(this.form);
  }

  submit(){
 // console.log(this.form.value);
    this._princeService.Create(this.form.value).subscribe({
      next:(res)=>{
        //console.log(res);
        this._princeService.entities.push(res.response);
        this.form.reset();
        this._toastr.success(res.message);
      },
      error:(error)=>{
// console.log(error);
        this._toastr.error(error.error.message);
      }
    });
  }
  
  Update(id:number){
    this._princeService.GetById(this._princeService.slecteeId).pipe(
      tap({
        next:(res)=>{
          this.form.setValue({
            id:res.response.id,
            name:res.response.name,
            nameAR:res.response.nameAR,
          });
        },
        error:(err)=>{
  // console.log(err);
        this._toastr.error(err.error.message);
      }
      })
    ).subscribe({
      next:(res)=>{
        //console.log(res);
      }
    });
  }
}

