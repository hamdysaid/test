import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, tap } from 'rxjs';
import { UserResponse } from 'src/app/models/auth';
import { EmployeeService } from 'src/app/service/employee.service';
import { HallService } from 'src/app/service/hall.service';
import * as L from 'leaflet';
import { ChairMarker } from 'src/app/models/Marker/chair-marker';
import { Place, PlaceMarker } from 'src/app/models/hall';
import { PlaceService } from 'src/app/service/place.service';
import { Chair, ChairChangeLocaton, ChairType, CreateChair } from 'src/app/models/chair';
import { ChairService } from 'src/app/service/chair.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GuestService } from 'src/app/service/guest.service';

@Component({
  selector: 'app-event-design-update',
  templateUrl: './event-design-update.component.html',
  styleUrls: ['./event-design-update.component.css']
})
export class EventDesignUpdateComponent implements OnInit {
  @ViewChild('addGuest', { static: true }) addGuest: TemplateRef<any>;
  @ViewChild('addChair', { static: true }) addChair: TemplateRef<any>;
  @ViewChild('deleteChair', { static: true }) deleteChair: TemplateRef<any>;
  img = "../../../../../../../../assets/images/uploadImage.svg";
  employees$: Observable<UserResponse[]>;
  private centroid: L.LatLngExpression = [0, 0]; //
  private map: L.Map;
  private _chairMarker: ChairMarker[] = [];
  markerDoorOne = new PlaceMarker([0.001, 0.012], {
    icon: new L.Icon(
      {
        alt: "door1",
        iconUrl: "../../../../../../../../assets/images/door1.svg"
      }
    ),
    draggable: true
  });

  markerDoorTwo = new PlaceMarker([0.001, -0.013], {
    icon: new L.Icon(
      {
        alt: "door2",
        iconUrl: "../../../../../../../../assets/images/door2.svg"
      }
    ),
    draggable: true
  });

  markerStage = new PlaceMarker([0.0052, -0.003], {
    icon: new L.Icon(
      {
        alt: "stage",
        iconUrl: "../../../../../../../../assets/images/stage.svg"
      }
    ),
    draggable: true
  });
  selectedChair?: Chair;


  constructor(
    private _routr: Router,
    private _toastService: ToastrService,
    private _activatedRour: ActivatedRoute,
    private _placeService: PlaceService,
    private _chairService: ChairService,
    private _hallService: HallService,
    private _employeeService: EmployeeService,
    private _guestService: GuestService,
    private _modal: NgbModal) {
  }
  hallId: number;
  ngOnInit(): void {
    this.employees$ = this._employeeService.getAllEmployee();
    const queryParams = this._activatedRour.snapshot.queryParams;
    const id: number = +queryParams['id'];
    if (id == null) {
      this._routr.navigate(["../"]);
    }
    this.getHall(id);
  }

  openModal(content: any) {
    this._modal.dismissAll();
    this._modal.open(content, { ariaLabelledBy: 'modal-title' }).result.then((result) => {
      // Handle modal result here
      // console.log(result);
    },() => {
      // Handle modal dismissal here
      //console.log(reason);
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
      this.addGuestForm.patchValue({
        imageFile: file,
      });
    }


  }

  getHall(id: number) {
    this._hallService.getHallbyEventId(id).pipe(
      tap({
        next: (res) => {
          this.hallId = res.response.id;
          res.response.chairs.forEach(chair => {
            let chairMarker: ChairMarker = new ChairMarker(
              [chair.x, chair.y],
              {
                attribution: `${chair.chairNumber}`,
                icon: new L.Icon(
                  {
                    className: "img-char",
                    alt: "char",
                    iconUrl: "../../../../../../../../assets/images/char.svg",
                  }
                ),
                alt: `${chair.id}`,
                draggable: true,
              }
            );
            chairMarker.id = chair.id;
            chairMarker.hallId = chair.hallId;
            chairMarker.rotation = chair.rotation;
            chairMarker.chairNumber = chair.chairNumber;
            chairMarker.guestUserId = chair.guestUserId;
            chairMarker.guestUser = chair.guestUser;
            chairMarker.employeeUserId = chair.employeeUserId;
            chairMarker.employeeUser = chair.employeeUser;
            chairMarker.chairTypeId = chair.chairTypeId;
            chairMarker.chairType = chair.chairType;
            chairMarker.statusId = chair.statusId;
            chairMarker.status = chair.status;
            chairMarker.hallId = chair.hallId;
            chairMarker.createdAt = chair.createdAt;
            chairMarker.updatedAt = chair.updatedAt;

            chairMarker.bindTooltip(`${chair.chairNumber}`,
              { direction: 'top', className: 'title', offset: new L.Point(14, 0) }
            ).bindPopup(chair.guestUser?.fullName ?? "Empty");
            chairMarker.addEventListener('click', (event) => {
      // console.log({ chair });

              if (chair.guestUserId == null) {
                this._modal.open(this.addGuest, { size: 'lg' });
                this.selectedChair = chair;
              }

              localStorage.setItem("chairId", `${chair.id}`);
            });
            chairMarker.addEventListener('dblclick', (event) => {
              localStorage.setItem("chairId", `${chair.id}`);

              this._modal.open(this.deleteChair);
            });
            chairMarker.addEventListener("dragend", (event) => {
              //ToDo:updateLocatin in Api
              let chairChangeLcatin: ChairChangeLocaton = {
                id: chair.id,
                x: chairMarker.getLatLng().lat,
                y: chairMarker.getLatLng().lng,
                rotation: chair.rotation
              };
              this._chairService.updateChairLcation(chairChangeLcatin).subscribe({
                next: (res) => {
                  //console.log(res);
                }
              });
            });

            this._chairMarker.push(chairMarker);

            this.markerDoorOne.setLatLng([res.response.exitGate.x, res.response.exitGate.y]);
            this.markerDoorOne.setId(res.response.exitGate.id);
            this.markerDoorTwo.setLatLng([res.response.entranceGate.x, res.response.entranceGate.y]);
            this.markerDoorTwo.setId(res.response.entranceGate.id);
            this.markerStage.setLatLng([res.response.honoraryPodium.x, res.response.honoraryPodium.y]);
            this.markerStage.setId(res.response.honoraryPodium.id);
          });
        }
      })
    ).subscribe({
      next: (res) => { },
      error: (error) => {
        this._toastService.error(error.error.message);

        const queryParams = { id: localStorage.getItem("eventId"), number: 10 };
        this._routr.navigate(['/dashboard/home/event/home/event-design'], { queryParams: queryParams });
      },
      complete: () => {
        this.initMap();
        this.AddAllhalToMap();
      }
    });
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 16,
      zoomControl: false,
      attributionControl: false,
    });

    const tiles = L.tileLayer('/assets/images/White-Background-PNG-Photo.png', {
      maxZoom: 16,
      minZoom: 16,
    });

    tiles.addTo(this.map);

    this.map.addEventListener('dblclick', (res) => {
      localStorage.setItem('latng', `${res.latlng.lat},${res.latlng.lng}`);
      this._modal.open(this.addChair);
      // console.log("here we need t call api to create marker then shoow the marker");
    });

  }

  private AddAllhalToMap() {
    this.markerDoorOne.addTo(this.map);
    this.markerDoorTwo.addTo(this.map);
    this.markerStage.addTo(this.map);
    this.addActionsToGatesAndStage();
    this._chairMarker.forEach(m => {
      m.addTo(this.map);
    });
  }
  addGuestForm: FormGroup = new FormGroup({
    imageinput: new FormControl(null, [Validators.required]),
    imageFile: new FormControl(null, [Validators.required]),
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    employeeId: new FormControl('', [Validators.required]),
    chairId: new FormControl(),
  });
  SubmitAddGuestFrm() {
    if (!localStorage.getItem("chairId")) {
      return;
    }

    this.addGuestForm.value.chairId = +localStorage.getItem("chairId")!;
    this._guestService.registerGuest(this.addGuestForm.value).subscribe({
      next: (res) => {
        let chair = this._chairMarker.find(x => x.id == +this.addGuestForm.value.chairId);
        chair?.getPopup()?.setContent(this.addGuestForm.value.fullName);
        chair?.setGuestId(res.response.id);
      },
      error: ({ error }) => {
        if (error?.message)
          this._toastService.error(error.message);
        else
          this._toastService.error(Object.values(error.errors).flat().join('\n'));
      },
      complete: () => {
        localStorage.removeItem("chairId");
        this.img = "../../../../../../../../assets/images/uploadImage.svg";
        this.addGuestForm.reset();
        this._modal.dismissAll();
      }
    });
  }
  addActionsToGatesAndStage() {
    this.markerDoorOne.addEventListener("dragend", (event) => {
      let LatLng = this.markerDoorOne.getLatLng();
      this.markerDoorOne.x = LatLng.lat;
      this.markerDoorOne.y = LatLng.lng;
      let place = {
        x: this.markerDoorOne.x,
        y: this.markerDoorOne.y,
        rotation: 0,
        id: this.markerDoorOne.id
      };
      this._placeService.Update(place as Place).subscribe((res) => {
        //console.log(res);
      });
    });

    this.markerDoorTwo.addEventListener("dragend", (event) => {
      let LatLng = this.markerDoorTwo.getLatLng();
      this.markerDoorTwo.x = LatLng.lat;
      this.markerDoorTwo.y = LatLng.lng;
      let place = {
        x: this.markerDoorTwo.x,
        y: this.markerDoorTwo.y,
        rotation: 0,
        id: this.markerDoorTwo.id
      };
      this._placeService.Update(place as Place).subscribe((res) => {
        //console.log(res);
      });
    });

    this.markerStage.addEventListener("dragend", (event) => {
      let LatLng = this.markerStage.getLatLng();
      this.markerStage.x = LatLng.lat;
      this.markerStage.y = LatLng.lng;
      let place = {
        x: this.markerStage.x,
        y: this.markerStage.y,
        rotation: 0,
        id: this.markerStage.id
      };
      this._placeService.Update(place as Place).subscribe((res) => {
        //console.log(res);
      });
    });
  }
  swithChairType(type: ChairType) {
    if (!localStorage.getItem("chairId"))
      return;

    this._chairService.swithChairType(+localStorage.getItem("chairId")!, type).subscribe({
      next: (res) => {
        if (this.selectedChair) this.selectedChair.chairTypeId = type;
        this._toastService.success(res.message);
      },
      error: (err) => {
        this._toastService.error(err.error.message);
      }
    });
  }

  CreateMarker() {

    let latlng = localStorage.getItem("latng");
    if (latlng == null) return;

    // console.log(latlng.split(',')[0] + " : " + latlng.split(',')[1]);

    if (this.cunter == 1) {
      this._chairMarker.forEach(element => {
        if (+element.chairNumber > this.cunter)
          this.cunter = +element.chairNumber;
// console.log(element.chairNumber);
      });
      this.cunter += 1;
    }
    let createChair: CreateChair = {
      hallId: this.hallId,
      chairNumber: `${this.cunter}`,
      x: +latlng.split(',')[0],
      y: +latlng.split(',')[0],
      rotation: 0,
      chairTypeId: 2
    };
    // console.log(latlng);
    // console.log(this.hallId);
    this._chairService.createChair(createChair).subscribe({
      next: (res) => {
        let chair = res.response;
        //console.log(res);
        let chairMarker: ChairMarker = new ChairMarker(
          [chair.x, chair.y],
          {
            attribution: `${chair.chairNumber}`,
            icon: new L.Icon(
              {
                className: "img-char",
                alt: "char",
                iconUrl: "../../../../../../../../assets/images/char.svg",
              }
            ),
            alt: `${chair.id}`,
            draggable: true,
          }
        );
        chairMarker.id = chair.id;
        chairMarker.hallId = chair.hallId;
        chairMarker.rotation = chair.rotation;
        chairMarker.chairNumber = chair.chairNumber;
        chairMarker.guestUserId = chair.guestUserId;
        chairMarker.guestUser = chair.guestUser;
        chairMarker.employeeUserId = chair.employeeUserId;
        chairMarker.employeeUser = chair.employeeUser;
        chairMarker.chairTypeId = chair.chairTypeId;
        chairMarker.chairType = chair.chairType;
        chairMarker.statusId = chair.statusId;
        chairMarker.status = chair.status;
        chairMarker.hallId = chair.hallId;
        chairMarker.createdAt = chair.createdAt;
        chairMarker.updatedAt = chair.updatedAt;

        chairMarker.bindTooltip(`${chair.chairNumber}`,
          { direction: 'top', className: 'title', offset: new L.Point(14, 0) }
        ).bindPopup(chair.guestUser?.fullName ?? "Empty");
        chairMarker.addEventListener('click', (event) => {
          if (chair.guestUserId == null)
            this._modal.open(this.addGuest, { size: 'lg' });

          localStorage.setItem("chairId", `${chair.id}`);
        });
        chairMarker.addEventListener('dblclick', (event) => {
          this._modal.open(this.deleteChair);
        });
        chairMarker.addEventListener("dragend", (event) => {
          //ToDo:updateLocatin in Api
          let chairChangeLcatin: ChairChangeLocaton = {
            id: chair.id,
            x: chairMarker.getLatLng().lat,
            y: chairMarker.getLatLng().lng,
            rotation: chair.rotation
          };
          this._chairService.updateChairLcation(chairChangeLcatin).subscribe({
            next: (res) => {
              //console.log(res);
            }
          });
        });

        chairMarker.addTo(this.map);
// console.log(chairMarker);
        this._chairMarker.push(chairMarker);
      },
      error: (err) => {
        this._toastService.error(err.error.message);
      },
      complete: () => {
        this._modal.dismissAll();
        this.cunter += 1;
      }
    });
  }
  cunter: number = 1;

  deleteChairMethod() {
    let id = localStorage.getItem("chairId");
    if (id)
      this._chairService.deleteChair(+id).subscribe({
        next: (res) => {
          let index = this._chairMarker.findIndex(c => c.id == +id!);
          let marker = this._chairMarker.find(c => c.id == +id!);
          this._chairMarker.splice(index, 1);
          marker?.remove();
          //console.log(res);
        },
        error: (error) => {
          this._toastService.error(error.error.message);
        },
        complete: () => {
          localStorage.removeItem("chairId");
          this._modal.dismissAll();
        }
      });
  }
}
