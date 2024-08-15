import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DegreeService } from 'src/app/service/degree.service';
import { GenderService } from 'src/app/service/gender.service';
import { PrincipalityService } from 'src/app/service/principality.service';
import { StateMachineService } from 'src/app/service/state-machine.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-volunteer-list-filter',
  templateUrl: './volunteer-list-filter.component.html',
  styleUrls: ['../volunteer-list-page/volunteer-list-page.component.css']
})
export class VolunteerListFilterComponent implements OnInit{
 
  form : FormGroup = new FormGroup({
    start : new FormControl(null),
    degreeId : new FormControl(null),
    page : new FormControl(null),
    statusIdAsString : new FormControl(null),
    pageSize : new FormControl(null),
    sortColumn : new FormControl(null),
    workPlace : new FormControl(null),
    daysAsString : new FormControl(null),
    end : new FormControl(null),
    principalityId : new FormControl(null),
    genderId : new FormControl(null),
    age : new FormControl(null),
  });
  dayOfWeek = [
    {
      id: 0,
      nameOfDay: 'Sunday',
      nameOfDayAr: 'الأحد',
    },
    {
      id: 1,
      nameOfDay: 'Monday',
      nameOfDayAr: 'الأثنين',
    },
    {
      id: 2,
      nameOfDay: 'Tuesday',
      nameOfDayAr: 'الثلاثاء',
    },
    {
      id: 3,
      nameOfDay: 'Wednesday',
      nameOfDayAr: 'الأربعاء',
    },
    {
      id: 4,
      nameOfDay: 'Thursday',
      nameOfDayAr: 'الخميس',
    },
    {
      id: 5,
      nameOfDay: 'Friday',
      nameOfDayAr: 'الجمعة',
    },
    {
      id: 6,
      nameOfDay: 'Saturday',
      nameOfDayAr: 'السبت',
    },
  ];
  daysAsString:number[] = [];
  language:string;
  constructor(private _stateService : StateMachineService,
              private _userService:UserService,
              protected _degreeService:DegreeService,
              protected _genderService: GenderService,
              protected _principalityService:PrincipalityService) {
                this.language = localStorage.getItem("lang") || "en";
              }

  ngOnInit(): void {
    this._degreeService.Get().subscribe({
      next:(res)=>{
        this._degreeService.entities = res.response.data;
      }
    });
    this._genderService.Get().subscribe({
      next:(res)=>{
        this._genderService.entities = res.response.data;
      }
    });
    this._principalityService.Get().subscribe({
      next:(res)=>{
        this._principalityService.entities = res.response.data;
      }
    });
  }

  submit(){
    // console.log(this.form.value);
    if(this.form.value.genderId)this.form.value.genderId = +this.form.value.genderId;
    if(this.form.value.principalityId)this.form.value.principalityId = +this.form.value.principalityId;
    if(this.form.value.degreeId)this.form.value.degreeId = +this.form.value.degreeId;
    if(this.form.value.genderId)this.form.value.genderId = +this.form.value.genderId;
    if(this.form.value.start)this.form.value.start+=":00";
    if(this.form.value.end)this.form.value.end+=":00";
    if(this.form.value.daysAsString){this.form.value.daysAsString = this.form.value.daysAsString.toString()};
    this._userService.getPage(1, this.form.value);
    this._stateService.ShowVolunteerFilterSeach();
  }
}
