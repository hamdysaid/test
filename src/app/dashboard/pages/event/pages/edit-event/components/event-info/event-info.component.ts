import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, retry, tap } from 'rxjs';
import { ApiResponse, Pagenation } from 'src/app/models/response';
import { EventService } from 'src/app/service/event.service';
import { Event } from '../../../../../../../models/event';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValiationMethodes } from 'src/app/utils/validation';
import { Status } from 'src/app/models/status';
import { EventStatusService } from 'src/app/service/event-status.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-event-info',
  templateUrl: './event-info.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css', './event-info.component.css']
})
export class EventInfoComponent implements OnInit {
  img: string | null = null;
  eventForm: FormGroup = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    name: new FormControl('', [Validators.required]),
    nameAR: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    descriptionAR: new FormControl('', [Validators.required]),
    locationHint: new FormControl('', [Validators.required]),
    locationLink: new FormControl('', [Validators.required]),
    startHour: new FormControl('', [Validators.required]),
    endHour: new FormControl('', [Validators.required]),
    hallImage: new FormControl(null, [Validators.required]),
    hallImageFile: new FormControl(null),
    startDate: new FormControl(null, [Validators.required]),
    endDate: new FormControl(null, [Validators.required]),
    statusId: new FormControl(6, [Validators.required]),
  });;
  validation: ValiationMethodes;
  loading: boolean = false;
  evendId: number | null = null;
  stauses$: Observable<ApiResponse<Pagenation<Status>>>;
  getByIdEvent$: Observable<ApiResponse<Event>>;
  language:string;
  constructor(
    private _toastr: ToastrService,
    private _eventStatusService: EventStatusService,
    private _routr: Router,
    private _eventService: EventService,
  ) {
    this.language = localStorage.getItem("lang") || "en";
   }
  ngOnInit(): void {
    if (localStorage.getItem("eventId") == null) {
      this._routr.navigate(['../']);
    }
    this.evendId = +localStorage.getItem("eventId")!;
    this.getByIdEvent$ = this._eventService.GetByIdAll(this.evendId).pipe(tap({
      next: (res) => {
        //console.log(res);
        this.eventForm.patchValue({
          id: res.response.id,
          name: res.response.name,
          nameAR: res.response.nameAR,
          description: res.response.description,
          descriptionAR: res.response.descriptionAR,
          locationHint: res.response.locationHint,
          locationLink: res.response.locationLink,
          startHour: res.response.startHour,
          endHour: res.response.endHour,
          hallImage: res.response.hallImage,
          startDate: res.response.startDate.substring(0, 10),
          endDate: res.response.endDate.substring(0, 10),
          statusId: res.response.statusId,
        });
        // console.log(this.eventForm.value);
      }
    }));

    this.stauses$ = this._eventStatusService.Get();
    this.validation = new ValiationMethodes(this.eventForm);
  }
  submit() {
    if (!this.eventForm.value.startHour.match(":00"))
      this.eventForm.value.startHour += ":00";
    if (!this.eventForm.value.endHour.match(":00"))
      this.eventForm.value.endHour += ":00";
    // console.log(this.eventForm.value);
    this._eventService.Update(this.eventForm.value).subscribe({
      next: (res) => {
        this._toastr.success(`${res.message} : ${res.response.name}`);
      },
      error: (errr) => {
        // console.log(errr);
        this._toastr.error(errr.error.message);
        this.eventForm.value.startHour.substring(0, 5);
        this.eventForm.value.endHour.substring(0, 5);
      }, complete: () => {
        this.eventForm.value.startHour.substring(0, 5);
        this.eventForm.value.endHour.substring(0, 5);
      }
    });
  }

  onFileChange(event: any) {
    const target = event.target as HTMLInputElement;
    const files = target.files!;
    if (files.length > 0) {
      const file = files[0];
      // console.log(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.img = reader.result as string;
      };
      this.eventForm.patchValue({
        hallImageFile: file,
      });
    }
  }

  validationUrl(response: ApiResponse<Event>) {
    return this.img == null ? environment.imageEndPoint.normal + response.response.hallImage : this.img;
  }
}
