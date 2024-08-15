import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { Degree } from 'src/app/models/degree';
import { DegreeService } from 'src/app/service/degree.service';
import { PopupService } from 'src/app/service/popup.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./cards.component.css']
})
export class CardsComponent {
@Input() degree: Degree;
form:FormGroup = new FormGroup({
  id: new FormControl(0, [Validators.required]),
  name : new FormControl('',[Validators.required]),
  nameAR : new FormControl('',[Validators.required])
})

constructor(protected _popup:PopupService<Degree>,
            private _degreeService:DegreeService,
            private _toastr:ToastrService) {}


delete(){
  this._degreeService.DeleteById(this.degree.id).subscribe({
    next:(res)=>{
      let index = this._degreeService.entities.findIndex(x=> x.id ==this.degree.id);
      this._degreeService.entities.splice(index,1);
    },
    error:(err)=>{
      this._toastr.error(err.error.message);
    }
  });
}
click(id: number) {
  this._degreeService.GetByIdAll(id).pipe(
    tap({
      next:(res)=>{
        this.form.patchValue({
            id : res.response.id,
            name : res.response.name,
            nameAR : res.response.nameAR,
        });
      }
    })
  ).subscribe({
    next:(res)=>{
      // console.log(res.response.nameAR);
      this._popup.setData(res.response);
      this._popup.setForm(this.form);
    }
  });
  }

}
