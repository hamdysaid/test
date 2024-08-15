import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Principalitie } from 'src/app/models/principalitie';
import { PopupService } from 'src/app/service/popup.service';
import { PrincipalityService } from 'src/app/service/principality.service';

@Component({
  selector: 'app-state-page',
  templateUrl: './state-page.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./state-page.component.css']
})
export class StatePageComponent implements OnInit{
  constructor(
    protected _popup:PopupService<Principalitie>,
    protected _princeService: PrincipalityService, 
    private _toastr:ToastrService) {}
  ngOnInit(): void {
    this._princeService.Get().subscribe({
      next:(res)=>{
        this._princeService.entities = res.response.data;
      },
      error:(err)=>{
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }
  
  submit(){
    let result:Principalitie = this._popup.getForm().value;
    // console.log(result);
    this._princeService.Update(result).subscribe({
      next:(res)=>{
        //console.log(res);
        this._princeService.entities[this._princeService.entities.findIndex(x=> x.id == result.id)] = res.response;
        this._toastr.success(res.message);
      },
      error:(err)=>{
// console.log(err);
        this._toastr.error(err.error.message);

      }
    });
    }
}
