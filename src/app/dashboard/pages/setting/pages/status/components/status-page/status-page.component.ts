import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { VolunteerStatusService } from 'src/app/service/volunteer-status.service';
import { GuestStatusService } from 'src/app/service/guest-status.service';
import { EventStatusService } from 'src/app/service/event-status.service';
import { EmployeeStatusService } from 'src/app/service/employee-status.service';
import { Volunteer, VolunteerStatus } from 'src/app/models/volunteer';
import { PopupService } from 'src/app/service/popup.service';
import { Guest } from 'src/app/models/guest';
import { EventStatus } from 'src/app/models/eventStatus';
import { Employee } from 'src/app/models/employee';



@Component({
  selector: 'app-status-page',
  templateUrl: './status-page.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./status-page.component.css']
})
export class StatusPageComponent implements OnInit {
  constructor(protected _volunteerStatusService:VolunteerStatusService, 
              private   _toastr:ToastrService,
              protected _guestStatusService:GuestStatusService,
              protected _eventStatusService:EventStatusService,
              protected _employeeStatusService:EmployeeStatusService,
              protected _popupVolunteer:PopupService<Volunteer>,
              protected _popupGuest:PopupService<Guest>,
              protected _popupEvent:PopupService<EventStatus>,
              protected _popupEmployee:PopupService<Employee>

    ) {}
  ngOnInit(): void {
    this._volunteerStatusService.Get().subscribe({
      next:(res)=>{
        this._volunteerStatusService.entities = res.response.data;
      },
      error:(err: HttpErrorResponse)=>{
        this._toastr.error(err.error.message);
// console.log(err);
      }
    });

    this._guestStatusService.Get().subscribe({
      next:(res)=>{
          this._guestStatusService.entities = res.response.data;
      },
      error:(err:HttpErrorResponse)=>{
        this._toastr.error(err.error.message);
// console.log(err);

      }
    });

    this._eventStatusService.Get().subscribe({
      next:(res)=>{
          this._eventStatusService.entities = res.response.data;
      },
      error:(err:HttpErrorResponse)=>{
        this._toastr.error(err.error.message);
// console.log(err);
      }
    });

    this._employeeStatusService.Get().subscribe({
      next:(res)=>{
          this._employeeStatusService.entities = res.response.data;
      },
      error:(err:HttpErrorResponse)=>{
        this._toastr.error(err.error.message);
// console.log(err);
      }
    });

  }
  submitVolunteer(){
    let result:VolunteerStatus = this._popupVolunteer.getForm().value;
    // console.log(result);
    result.color = result.color.replace('#','');
    // console.log(result);
    this._volunteerStatusService.Update(result).subscribe({
      next:(res)=>{
        this._volunteerStatusService.entities[this._volunteerStatusService.entities.findIndex(x=> x.id == result.id)] = res.response;
        this._toastr.success(res.message);
      },
      error:(err)=>{
        this._toastr.error(err.error.message);
// console.log(err);
      }
    });
  }
  submitGuest(){
    let result:Guest = this._popupGuest.getForm().value;
    result.color = result.color.replace('#','');
    this._guestStatusService.Update(result).subscribe({
      next:(res)=>{
        this._guestStatusService.entities[this._guestStatusService.entities.findIndex(x=> x.id == result.id)] = res.response;
        this._toastr.success(res.message);
      },
      error:(err)=>{
        this._toastr.error(err.error.message);
      }
    });
  }
  submitEvent(){
    let result:EventStatus = this._popupGuest.getForm().value;
    result.color = result.color.replace('#','');
    this._eventStatusService.Update(result).subscribe({
      next:(res)=>{
        this._eventStatusService.entities[this._eventStatusService.entities.findIndex(x=> x.id == result.id)] = res.response;
        this._toastr.success(res.message);
      },
      error:(err)=>{
        this._toastr.error(err.error.message);
      }
    });
  }
  submitEmployee(){
  let result:Employee = this._popupEmployee.getForm().value;
  result.color = result.color.replace('#','');
  this._employeeStatusService.Update(result).subscribe({
    next:(res)=>{
      this._employeeStatusService.entities[this._employeeStatusService.entities.findIndex(x=> x.id == result.id)] = res.response;
      this._toastr.success(res.message);
    },
    error:(err)=>{
      this._toastr.error(err.error.message);
    }
  });
  }
}
