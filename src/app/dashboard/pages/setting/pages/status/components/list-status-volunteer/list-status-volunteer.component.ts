import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { Status } from 'src/app/models/status';
import { Volunteer, VolunteerStatus } from 'src/app/models/volunteer';
import { PopupService } from 'src/app/service/popup.service';
import { VolunteerStatusService } from 'src/app/service/volunteer-status.service';

@Component({
  selector: 'app-list-status-volunteer',
  templateUrl: './list-status-volunteer.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./list-status-volunteer.component.css']
})
export class ListStatusVolunteerComponent {
@Input() VolunteerStatus: Status;
form:FormGroup =new FormGroup({
  id: new FormControl(0, [Validators.required]),
  name:new FormControl('', [Validators.required]),
  nameAR:new FormControl('', [Validators.required]),
  color:new FormControl('#000000', [Validators.required]),
});
constructor(private _volunteerStatus: VolunteerStatusService, 
            private _toastr: ToastrService,
            protected _popup:PopupService<VolunteerStatus>) {}


 delete(){
    this._volunteerStatus.DeleteById(this.VolunteerStatus.id).subscribe({
      next:(res)=>{
        this._toastr.success(res.message);
        this._volunteerStatus.entities.splice(this._volunteerStatus.entities.findIndex(s=> s.id == this.VolunteerStatus.id),1);
      },
      error:(err)=>{
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }
  click(id: number) {
    this.form.value.color = this.form.value.color.replace('#',""); 
    this._volunteerStatus.GetByIdAll(id).pipe(
      tap({
        next:(res)=>{
  // console.log("________________________");
          //console.log(res);
  // console.log("________________________");
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
// console.log(this.form.value);
// console.log(res.response);
        this._popup.setData(res.response);
        this._popup.setForm(this.form);
      }
    });
    }

}
