import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { Principalitie } from 'src/app/models/principalitie';
import { PopupService } from 'src/app/service/popup.service';
import { PrincipalityService } from 'src/app/service/principality.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./card.component.css']
})
export class CardComponent {

  @Input() principalitie:Principalitie;
  form:FormGroup = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    name : new FormControl('',[Validators.required]),
    nameAR : new FormControl('',[Validators.required])
  })
  constructor(
    protected _popup:PopupService<Principalitie>,
    protected _princeService: PrincipalityService, private _toastr:ToastrService) {}

  delete(){
    this._princeService.DeleteById(this.principalitie.id).subscribe({
      next:(res)=>{
        //console.log(res);
        let index = this._princeService.entities.findIndex(x=> x.id ==this.principalitie.id);
        this._princeService.entities.splice(index,1);
        this._toastr.success(res.message);
      }
    });
  }
  click(id: number) {
    this._princeService.GetByIdAll(id).pipe(
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
