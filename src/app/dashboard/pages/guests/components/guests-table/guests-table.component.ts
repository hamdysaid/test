import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GuestService } from 'src/app/service/guest.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './guests-table.component.css']
})
export class GuestsTableComponent implements OnInit{
    imagePath = environment.imageEndPoint;
    constructor(protected _guestService:GuestService, private _toastr: ToastrService) {}
    ngOnInit(): void {
      this._guestService.getGuestReportPagenation(this._guestService.currentPage);
    }
  
    changeActivation(email:string){
      // console.log(email);
      this._guestService.changeActive(email).subscribe({
        next:(res)=>{
      this._guestService.getPage(this._guestService.currentPage);
      //console.log(res);
        },
        error:(err)=>{
  // console.log(err);
          this._toastr.error(err.error.message);
        }
      });
    }
    
    deleteGuest(email:string){
      // console.log(email);
      this._guestService.deleteGuest(email).subscribe({
        next:(res)=>{
      this._guestService.getGuestReportPagenation(this._guestService.currentPage);
      //console.log(res);
    },
        error:(err)=>{
  // console.log(err);
          this._toastr.error(err.error.message);
        }
      });
    }


  }
  