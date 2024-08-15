import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { Status } from 'src/app/models/status';
import { EventStatusService } from 'src/app/service/event-status.service';
import { PopupService } from 'src/app/service/popup.service';

@Component({
  selector: 'app-list-status-event',
  templateUrl: './list-status-event.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./list-status-event.component.css']
})
export class ListStatusEventComponent {
  @Input() EventStatus: Status;
  form:FormGroup =new FormGroup({
  id: new FormControl(0, [Validators.required]),
  name:new FormControl('', [Validators.required]),
    nameAR:new FormControl('', [Validators.required]),
    color:new FormControl('#000000', [Validators.required]),
  });
  constructor(private _eventStatus:EventStatusService,
              private _toastr:ToastrService,
              protected _popup:PopupService<Status>){}

  delete(){
    this._eventStatus.DeleteById(this.EventStatus.id).subscribe({
      next:(res)=>{
        this._toastr.success(res.message);
        this._eventStatus.entities.splice(this._eventStatus.entities.findIndex(s=> s.id == this.EventStatus.id),1);
      },
      error:(err)=>{
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }
  click(id: number) {
    this.form.value.color = this.form.value.color.replace('#',""); 
    this._eventStatus.GetByIdAll(id).pipe(
      tap({
        next:(res)=>{
          this.form.patchValue({
              id : res.response.id,
              name : res.response.name,
              nameAR : res.response.nameAR,
              color: '#'+res.response.color
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
