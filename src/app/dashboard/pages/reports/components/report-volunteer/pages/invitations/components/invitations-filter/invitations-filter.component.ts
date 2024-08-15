import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Principalitie } from 'src/app/models/principalitie';
import { InvitationStatusService } from 'src/app/service/invitation-status.service';
import { PrincipalityService } from 'src/app/service/principality.service';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-invitations-filter',
  templateUrl: './invitations-filter.component.html',
  styleUrls: ['../../../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './invitations-filter.component.css']
})
export class InvitationsFilterComponent implements OnInit {
  language:string;
  constructor(
    private   _reportService:ReportService, 
    protected _invitationStatusService:InvitationStatusService,
    protected _principalityService:PrincipalityService) {
      this.language = localStorage.getItem("lang") || "en";
    }

  principalityResponse:Principalitie[] = [];

    ngOnInit(): void {
      this._invitationStatusService.Get().subscribe({
        next:(res)=>{
            this._invitationStatusService.entities = res.response.data;
          }
      });
      this._principalityService.GetAll().subscribe({
        next:(res)=>{
          this.principalityResponse = res.response.data;
        }
      });
    }
    form:FormGroup = new FormGroup({
    startTime: new FormControl(null),
    endTime: new FormControl(null),
    statusId: new FormControl(null),
    principalityId: new FormControl(null),
  });
  
  submit(){
      // console.log(this.form.value);
      this._reportService.invitationFilter = this.form.value;
      this._reportService.getPageInvitation();
      this.form.reset();
  }
}
