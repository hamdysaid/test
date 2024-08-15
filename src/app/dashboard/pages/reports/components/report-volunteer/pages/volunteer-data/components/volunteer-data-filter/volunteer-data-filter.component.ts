import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserResponse } from 'src/app/models/auth';
import { Degree } from 'src/app/models/degree';
import { Gender } from 'src/app/models/gender';
import { Principalitie } from 'src/app/models/principalitie';
import { DegreeService } from 'src/app/service/degree.service';
import { GenderService } from 'src/app/service/gender.service';
import { PrincipalityService } from 'src/app/service/principality.service';
import { ReportService } from 'src/app/service/report.service';
import { VolunteerStatusService } from 'src/app/service/volunteer-status.service';

@Component({
  selector: 'app-volunteer-data-filter',
  templateUrl: './volunteer-data-filter.component.html',
  styleUrls: ['../../../../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './volunteer-data-filter.component.css']
})
export class VolunteerDataFilterComponent implements OnInit {
  language:string;
  constructor(
    private _reportService:ReportService, 
    protected _volunteerStatusService:VolunteerStatusService,
    protected _principalityService:PrincipalityService,
    protected _genderService:GenderService,
    protected _degreeService:DegreeService) {
      this.language = localStorage.getItem("lang") || "en";
    }

  principalityResponse:Principalitie[] = [];
  genderResponse:Gender[] = [];
  degreeResponse:Degree[] = [];

    ngOnInit(): void {
      this._volunteerStatusService.Get().subscribe({
        next:(res)=>{
            this._volunteerStatusService.entities = res.response.data;
          }
      });
      this._principalityService.GetAll().subscribe({
        next:(res)=>{
          this.principalityResponse = res.response.data;
        }
      });
      this._genderService.GetAll().subscribe({
        next:(res)=>{
          this.genderResponse = res.response.data;
        }
      });
      this._degreeService.GetAll().subscribe({
        next:(res)=>{
          this.degreeResponse = res.response.data;
        }
      });
    }
    form:FormGroup = new FormGroup({
    startDate: new FormControl(null),
    endDate: new FormControl(null),
    degreeId: new FormControl(null),
    genderId: new FormControl(null),
    principalityId: new FormControl(null),
  });
  
  submit(){
      // console.log(this.form.value);
      this._reportService.volunteerFilter = this.form.value;
      this._reportService.getPageVolunteer();
      this.form.reset();
  }
  
}
