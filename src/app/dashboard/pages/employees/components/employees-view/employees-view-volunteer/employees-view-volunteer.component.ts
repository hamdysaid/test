import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs';
import { Invitaion } from 'src/app/models/Invitation';
import { invitationservice } from 'src/app/service/invitaion.service';
import { GetDayName } from 'src/app/utils/extensions';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employees-view-volunteer',
  templateUrl: './employees-view-volunteer.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './employees-view-volunteer.component.css']
})
export class EmployeesViewVolunteerComponent {
  @ViewChild('modalDetails', { static: true }) modalDetails: TemplateRef<any>;
  invitationForm: FormGroup = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    jopTitle: new FormControl('', [Validators.required]),
    jopTitleAR: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    descriptionAR: new FormControl('', [Validators.required]),
    fromStart: new FormControl('', [Validators.required]),
    toEnd: new FormControl('', [Validators.required]),
    numberOfHours: new FormControl(0, [Validators.required]),
    numberOfDays: new FormControl(0, [Validators.required]),
    addressHint: new FormControl('', [Validators.required]),
    addressLink: new FormControl('', [Validators.required]),
    statusId: new FormControl(38, [Validators.required]),
    daysAsString: new FormControl([0, 2, 4], [Validators.required]),
    volunteerUserId: new FormControl('', [Validators.required]),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
    creatorId: new FormControl('', [Validators.required]),
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
  getDay = GetDayName;
  imagePath = environment.imageEndPoint;
@Input() Invitations:Invitaion[];
language:string;
constructor(private modal:NgbModal, private _invitationService: invitationservice) {
  this.language = localStorage.getItem("lang") || "en";
}
clickToShowInvitation(id:number){
  this._invitationService.GetByIdAll(id).pipe(
    tap({
      next:(res)=>{
        // console.log(res.response.classDateTimes);
        let daysAsString:number[] = [];
        res.response.classDateTimes.forEach(d=>{
          daysAsString.push(d.day);
        });
        this.invitationForm.patchValue({
          id : res.response.id,
          jopTitle : res.response.jopTitle,
          jopTitleAR : res.response.jopTitleAR,
          description : res.response.description,
          descriptionAR : res.response.descriptionAR,
          fromStart : res.response.fromStart.split('T')[0],
          toEnd : res.response.toEnd.split('T')[0],
          numberOfHours : res.response.numberOfHours,
          numberOfDays : res.response.numberOfDays,
          addressHint : res.response.addressHint,
          addressLink : res.response.addressLink,
          statusId : res.response.statusId,
          daysAsString : daysAsString,
          volunteerUserId : res.response.volunteerUserId,
          start : res.response.classDateTimes[0].start.split(':')[0] +":"+ res.response.classDateTimes[0].start.split(':')[1],
          end : res.response.classDateTimes[0].end.split(':')[0] +":"+ res.response.classDateTimes[0].end.split(':')[1],
          creatorId: res.response.creatorId
          });
      
        // console.log(this.invitationForm.value);

      }
    })
  ).subscribe({
    next:(res)=>{
      //console.log(res);
    }
  });
  this.modal.open(this.modalDetails, {size: 'lg'});
}
}
