import { Component, OnInit, OnDestroy, Input, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventSpeakersService } from 'src/app/service/event-speakers.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { EventSpeakers } from 'src/app/models/event';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, tap } from 'rxjs';
import { ApiResponse } from 'src/app/models/response';
import { ValiationMethodes } from 'src/app/utils/validation';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-event-speaker',
  templateUrl: './event-speaker.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css', './event-speaker.component.css']
})
export class EventSpeakerComponent implements OnInit, OnDestroy {
  imagePath = environment.imageEndPoint.normal;
  img: string | null = null;
  loading = false;
  getByIdEvent$: Observable<ApiResponse<EventSpeakers>>;
  @Input() eventSpeakers: EventSpeakers;
  @ViewChild('updateSpeakerModal', { static: true }) updateSpeakerModal: TemplateRef<any>;
  validation: ValiationMethodes;
  evendId: number;
  language:string;
  constructor(protected _eventSpeakersService: EventSpeakersService,
    private _routr: Router, protected _toastr: ToastrService,
    protected _modal: NgbModal , private trans: TranslateService) {
      this.language = localStorage.getItem("lang") || "en";
  }
  ngOnDestroy(): void {
    this._eventSpeakersService.entities = [];
  }
  ngOnInit(): void {
    if (localStorage.getItem("eventId") == null) {
      this._routr.navigate(['../']);
    }
    this.evendId = +localStorage.getItem("eventId")!;
    this._eventSpeakersService.getByEventId(this.evendId).subscribe({
      next: (res) => {
        this._eventSpeakersService.entities = res.response;
        //console.log(res);
      }
    });
  }

  deleteItem(id: number) {
    Swal.fire({
      title: this.trans.instant('Are you sure?'),
      text: this.trans.instant('Delete confirmation - All related information will be deleted.'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: this.trans.instant('Yes'),
      confirmButtonColor: '#930303',
      cancelButtonText: this.trans.instant('No')
    }).then((result) => {
      if (result.isConfirmed) {
        this._eventSpeakersService.DeleteById(id).subscribe({
          next: (res) => {
            let index = this._eventSpeakersService.entities.findIndex(x => x.id == id);
            this._eventSpeakersService.entities.splice(index, 1);
            this._toastr.success(this.trans.instant('Delete Successfuly'));
          },
          error: (err) => {
            this._toastr.error(err.error.message);
          }
        });
        // Show success message
       /* Swal.fire(
          'Deleted!',
          'Your item has been deleted.',
          'success'
        );*/
      }
    });
  }

  updateSpeakerFrom: FormGroup = new FormGroup({
    eventId: new FormControl(0, [Validators.required]),
    id: new FormControl(0, [Validators.required]),
    imageinput: new FormControl(""),
    imageFile: new FormControl(""),
    image: new FormControl('', [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    fullNameAR: new FormControl('', [Validators.required]),
    specialization: new FormControl('', [Validators.required]),
    specializationAR: new FormControl('', [Validators.required]),
  });

  clickToUpdateSpeaker(id: number) {
    // console.log(id);
    this._modal.open(this.updateSpeakerModal).result.then((res) => {
    }, (reasn) => { this.img = null; });
    this.getByIdEvent$ = this._eventSpeakersService.GetByIdAll(id).pipe(tap({
      next: (res) => {
        //console.log(res);
        this.updateSpeakerFrom.patchValue({
          id: res.response.id,
          eventId: res.response.eventId,
          fullName: res.response.fullName,
          fullNameAR: res.response.fullNameAR,
          specialization: res.response.specialization,
          specializationAR: res.response.specializationAR,
          image: res.response.image,
        });
        // console.log(this.updateSpeakerFrom.value);
      }
    }));
    this.validation = new ValiationMethodes(this.updateSpeakerFrom);
  }

  submitUpdateSpeaker() {
    if (!localStorage.getItem("eventId")) {
      this._toastr.error("There Is No Event");
      return;
    }
    this.loading = true;
    this._eventSpeakersService.Update(this.updateSpeakerFrom.value).subscribe({
      next: (res) => {
        //console.log(res);
        let speacker = this._eventSpeakersService.entities.findIndex(s => s.id == res.response.id);
        this._eventSpeakersService.entities[speacker] = res.response;
        this._toastr.success(res.message);
        this.img = '.../../../../../../../../assets/images/uploadImage.svg';
        this.updateSpeakerFrom.reset();
        this._modal.dismissAll();
      },
      error: (error: HttpErrorResponse) => {
        // console.log(error);
        this._toastr.error(error.error.message);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
  onFileChange(event: Event) {
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
      this.updateSpeakerFrom.patchValue({
        imageFile: file,
      });
    }
  }

  validationUrl(response: ApiResponse<EventSpeakers>) {
    return this.img == null ? environment.imageEndPoint.normal + response.response.image : this.img;
  }
}
