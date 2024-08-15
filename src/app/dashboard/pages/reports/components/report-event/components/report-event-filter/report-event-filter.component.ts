import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiResponse, Pagenation } from 'src/app/models/response';
import { Status } from 'src/app/models/status';
import { EventStatusService } from 'src/app/service/event-status.service';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-report-event-filter',
  templateUrl: './report-event-filter.component.html',
  styleUrls: ['../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './report-event-filter.component.css']
})
export class ReportEventFilterComponent {
  language:string;
constructor(
  private _reportService:ReportService, 
  protected _eventStatusService:EventStatusService
){
  this.language = localStorage.getItem("lang") || "en";
}
ngOnInit(): void {
  this._eventStatusService.Get().subscribe({
    next:(res)=>{
      this._eventStatusService.entities = res.response.data;
    }
  });
}

form:FormGroup = new FormGroup({
  startDate: new FormControl(null),
  endDate: new FormControl(null),
  statusId: new FormControl(null),
})
submit(){
  // console.log(this.form.value);
  let {startDate} = this.form.value;
  let {endDate} = this.form.value;
  let {statusId} = this.form.value;
  this._reportService.startDateEvent = startDate;
  this._reportService.endDateEvent = endDate;
  this._reportService.statusIdEvent = statusId;
  this._reportService.getPageEvent(1);
  this.form.reset();
}

}
