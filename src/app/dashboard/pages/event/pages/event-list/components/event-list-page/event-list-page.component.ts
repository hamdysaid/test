import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/service/event.service';
import { environment } from 'src/environments/environment';
import {Event} from 'src/app/models/event';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-event-list-page',
  templateUrl: './event-list-page.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-list-page.component.css']
})
export class EventListPageComponent implements OnInit{
  @Input() event:Event;
  imagePath = environment.imageEndPoint;
  language:string;
  constructor(
    private _router:Router,
    protected _eventService:EventService, private _toastr: ToastrService ,private trans: TranslateService) {
      this.language = localStorage.getItem("lang") || "en";
    }
  ngOnInit(): void {
    this._eventService.GetPagenation(this._eventService.pagenateInfo.currentPage);
  }
  deleteItem(id:number) {
    Swal.fire({
      title: this.trans.instant('Are you sure?'),
      text: this.trans.instant('Delete confirmation - All related information will be deleted.'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: this.trans.instant('Yes'),
      confirmButtonColor:'#930303',
      cancelButtonText: this.trans.instant('No')
    }).then((result) => {
      if (result.isConfirmed) {
        this._eventService.DeleteById(id).subscribe({
          next:(res)=>{ 
        this._eventService.GetPagenation(this._eventService.pagenateInfo.currentPage);
        this._toastr.success(this.trans.instant('Delete Successfuly'));
      },
          error:(err)=>{
            this._toastr.error(err.error.message);
          }
        });

        // Show success message
        /*Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        );*/
      }
    });
  }

  GoToEditEvent(id:number){
    localStorage.setItem("eventId",`${id}`);
    this._router.navigate(['/dashboard/home/event/home/edit-event']);
  }

  // deleteEvent(id:number){
  //// console.log(id);
  //   this._eventService.DeleteById(id).subscribe({
  //     next:(res)=>{ 
  //   this._eventService.GetPagenation(this._eventService.pagenateInfo.currentPage);
  //   this._toastr.success("Delete Successfuly !!");
  //   //console.log(res);
  // },
  //     error:(err)=>{
  //    // console.log(err);
  //       this._toastr.error(err.message);
  //     }
  //   });
  // }


}
