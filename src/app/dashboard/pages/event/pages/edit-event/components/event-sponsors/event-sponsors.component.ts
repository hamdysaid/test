import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventSponsorsService } from 'src/app/service/event-sponsors.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-event-sponsors',
  templateUrl: './event-sponsors.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-sponsors.component.css']
})
export class EventSponsorsComponent implements OnInit, OnDestroy{
  imagePath = environment.imageEndPoint;
  evendId: number;
  language:string;
  constructor(protected _eventSponsorsService:EventSponsorsService,
              private _toastr:ToastrService,
              private _routr:Router ,private trans: TranslateService) {
       this.language = localStorage.getItem("lang") || "en";
  }
  ngOnDestroy(): void {
    this._eventSponsorsService.entities = [];
  }
  ngOnInit(): void {
    if(localStorage.getItem("eventId") == null){
      this._routr.navigate(['../']);
    }
    this.evendId = +localStorage.getItem("eventId")!;
        this._eventSponsorsService.getByEventId(this.evendId).subscribe({
          next:(res)=>{
            this._eventSponsorsService.entities = res.response;
            //console.log(res);
          }
        });
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
        this._eventSponsorsService.DeleteById(id).subscribe({
        next:(res)=>{ 
        let index=  this._eventSponsorsService.entities.findIndex(x=> x.id == id );
        this._eventSponsorsService.entities.splice(index,1);
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

}
