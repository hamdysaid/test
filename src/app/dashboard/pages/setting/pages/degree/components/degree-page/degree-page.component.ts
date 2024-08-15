import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Degree } from 'src/app/models/degree';
import { DegreeService } from 'src/app/service/degree.service';
import { PopupService } from 'src/app/service/popup.service';

@Component({
  selector: 'app-degree-page',
  templateUrl: './degree-page.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./degree-page.component.css']
})
export class DegreePageComponent implements OnInit{
  language:string;
  constructor(protected _popup:PopupService<Degree>,
    protected _degreeService:DegreeService,
    private _toastr:ToastrService) {
      this.language = localStorage.getItem("lang") || "en";
    }
  ngOnInit(): void {
    this._degreeService.Get().subscribe({
      next:(res)=>{
        this._degreeService.entities = res.response.data;
      },
      error:(err)=>{
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }

  submit(){
    let result:Degree = this._popup.getForm().value;
    // console.log(result);
    this._degreeService.Update(result).subscribe({
      next:(res)=>{
        //console.log(res);
        this._degreeService.entities[this._degreeService.entities.findIndex(x=> x.id == result.id)] = res.response;
        this._toastr.success(res.message);
      },
      error:(err)=>{
// console.log(err);
        this._toastr.error(err.error.message);

      }
    });
    }
}
