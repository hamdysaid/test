import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Vacation } from 'src/app/models/vacation';
import { VacationService } from 'src/app/service/vacation.service';

@Component({
  selector: 'app-employees-view-access',
  templateUrl: './employees-view-access.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './employees-view-access.component.css']
})
export class EmployeesViewAccessComponent {
  @Input()vacations: Vacation[];

  constructor(private _vacationService:VacationService, private _toastr:ToastrService) {
    
  }
  AcceptorReject(id:number, request:boolean){
    this._vacationService.AcceptOrRejectVacation(id, request).subscribe({
      next:(res)=>{
        //console.log(res);
        this._toastr.success("Success");
      },
      error:(err)=>{
        // console.log(err);
        this._toastr.error(err.message);
      },
      complete:()=>{
        this.vacations.splice(this.vacations.findIndex(v=> v.id == id),1);
      }
    });
  }
}
