import { OnInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { Invitaion } from 'src/app/models/Invitation';
import { UserResponse } from 'src/app/models/auth';
import { invitationservice } from 'src/app/service/invitaion.service';
import { UserService } from 'src/app/service/user.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-volunteer-view-page',
  templateUrl: './volunteer-view-page.component.html',
  styleUrls: [
    '../../../volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
    './volunteer-view-page.component.css',
  ],
})
export class VolunteerViewPageComponent implements OnInit {
  userResponse: UserResponse = {
    id: '',
    userName: '',
    email: '',
    phoneNumber: '',
    image: '',
    fullName: '',
    fullNameAR: '',
    isActive: false,
    internationalId: null,
    employeeNumber: '',
    status: {
      name: '',
      nameAR: '',
      color: '',
      id: 0,
      createdAt: null,
      updatedAt: null,
    },
    principalityId: 0,
    departmentId: 0,
    principality: {
      name: '',
      nameAR: '',
      id: 0,
      createdAt: null,
      updatedAt: null,
    },
    startWorkTime: '',
    endWorkTime: '',
    imageFile: null,
    available: false,
    dateOfBirth: null,
    addressHint: null,
    classDateTimes: null,
  };
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
    end: new FormControl('', [Validators.required]),  });
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
    language:string;
    validation: ValiationMethodes;
  constructor(
    private _toastr:ToastrService,
    private _activatedRoute: ActivatedRoute,
    private _userService: UserService,
    private _invitationservice:invitationservice,
  ) {
    this.language = localStorage.getItem("lang") || "en";
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next: (query) => {
        this._userService
          .VolunteerViewDetail(query.get('id')!)
          .pipe(
            tap({
              next: (res) => {
                this.invitationForm.patchValue({
                  volunteerUserId: res.id,
                });
              },
            })
          )
          .subscribe({
            next: (res) => {
              this.userResponse = res;
              //console.log(res);
            },
          });
      },
    });
    this.validation = new ValiationMethodes(this.invitationForm);
  }
  submitInvitation() {
    // let invitaion: Invitaion = this.invitationForm.value;
    // let day: number[] = this.invitationForm.value.day;
    // invitaion.classDateTimes = [];
    // day.map((d) =>
    //   invitaion.classDateTimes.push({
    //     day: d,
    //     end: invitaion.toEnd,
    //     start: invitaion.fromStart,
    //     id: 0,
    //     createdAt: null,
    //     updatedAt: null
    //   })
    // );
    this.invitationForm.value.start += ":00";
    this.invitationForm.value.end += ":00";
    this.invitationForm.value.daysAsString = this.invitationForm.value.daysAsString.toString()
    // console.log(this.invitationForm.value);
    this._invitationservice.Create(this.invitationForm.value).subscribe({
      next:(res)=>{
        //console.log(res);
        this.invitationForm.reset();
      },
      error:(err)=>{
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }



}
