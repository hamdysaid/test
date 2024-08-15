import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as L from 'leaflet';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ChairMarker } from 'src/app/models/Marker/chair-marker';
import { UserResponse } from 'src/app/models/auth';
import { Chair, CreateChair, ChairChangeLocaton, ChairType } from 'src/app/models/chair';
import { Hall, PlaceMarker, Place } from 'src/app/models/hall';
import { ChairService } from 'src/app/service/chair.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { GuestService } from 'src/app/service/guest.service';
import { HallService } from 'src/app/service/hall.service';
import { PlaceService } from 'src/app/service/place.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  eventId = 0;
  counter = 0;

  allMarkers: number[][] = [];
  // chairmarkers:L.LayerGroup = new L.LayerGroup();
  chairmarkers: ChairMarker[] = [];
  chairResult: Chair[] = [];
  employees$: Observable<UserResponse[]>;
  @ViewChild('addGuest', { static: true }) addGuest: TemplateRef<any>;
  @ViewChild('addChair', { static: true }) addChair: TemplateRef<any>;
  @ViewChild('deleteChair', { static: true }) deleteChair: TemplateRef<any>;

  constructor(
    private _modal: NgbModal,
    private _toastService: ToastrService,
    private _chairService: ChairService,
    private _activatedRour: ActivatedRoute,
    private _hallService: HallService,
    private _employeeService: EmployeeService,
    private _guestService: GuestService,
    private _placeService: PlaceService,
    private _userService: UserService,
    private _routr: Router
  ) { }
  private map: L.Map;
  private centroid: L.LatLngExpression = [0, 0]; //

  numberOfChairsParams = 0;
  ngOnInit(): void {
    this.employees$ = this._employeeService.getAllEmployee();
    const queryParams = this._activatedRour.snapshot.queryParams;
    const id: number = +queryParams['id'];
    const number: number = +queryParams['number'];
    const token: string = queryParams['token'];

    if (id == null || token == null || number == null) {
      this._routr.navigate(["/"]);
    }
    this._userService.saveFromQuery(token);
    this.eventId = id;
    this.numberOfChairsParams = number;
    this.CreateChairsAndHall();
  }

  createListOfLatLng(numberOfChairs: number) {
    const markerCoords = [];
    let x = 0.000;
    let oldX = 0.000;
    let y = -0.006;
    let oldY = -0.006;
    let number = numberOfChairs;
    let mode = 6;
    let numberOfChairPerRow = 12;
    number = this.getNumberfheMod(mode, number);
    // number+=1;

    for (let index = 1; index <= number; index++) {
      if (index % numberOfChairPerRow == 0) {
        x += -0.001;
        y = oldY;
        continue;
      }


      y += 0.001;
      if (index % mode == 0) {
        continue;
      }

      markerCoords.push([x, y, ++this.counter]);
    }
    return markerCoords;
  }

  getNumberfheMod(mde: number, list: number) {
    let cunter = 0;
    for (let index = 0; index <= list; index++) {
      if (index % mde == 0)
        cunter += 1;
    }
    list += cunter;
    // console.log(list);
    return list;
  }

  CreateChairsAndHall() {
    let hallMdel: Hall = {
      id: 0,
      eventId: this.eventId,
      entranceGate: {
        id: 0,
        createdAt: null,
        updatedAt: null,
        x: this.markerDoorTwo.getLatLng().lat,
        y: this.markerDoorTwo.getLatLng().lng,
        rotation: 0
      },
      exitGate: {
        id: 0,
        createdAt: null,
        updatedAt: null,
        x: this.markerDoorOne.getLatLng().lat,
        y: this.markerDoorOne.getLatLng().lng,
        rotation: 0
      },
      honoraryPodium: {
        id: 0,
        createdAt: null,
        updatedAt: null,
        x: this.markerStage.getLatLng().lat,
        y: this.markerStage.getLatLng().lng,
        rotation: 0
      },
      createdAt: null,
      updatedAt: null,
      chairs: []
    };


    this._hallService.Create(hallMdel).subscribe({
      next: (res) => {
        this.markerDoorTwo.setId(res.response.entranceGate.id);
        this.markerDoorOne.setId(res.response.exitGate.id);
        this.markerStage.setId(res.response.honoraryPodium.id);
        //console.log(res);
        this.hallId = res.response.id;
        let allChairs: CreateChair[] = this.createListOfLatLng(this.numberOfChairsParams).map(m => {
          return {
            chairNumber: `${m[2]}`,
            hallId: res.response.id,
            x: m[0],
            y: m[1],
            rotation: 0,
            chairTypeId: 2,
          };
        });
        this._chairService.createAllChaires(allChairs).subscribe({
          next: (res) => {
            //console.log(res);
            this.chairResult = res.response;
            res.response.forEach(c => {
              let chair: ChairMarker = new ChairMarker(
                [c.x, c.y], {
                attribution: `${c.chairNumber}`,
                icon: new L.Icon(
                  {
                    className: "img-char",
                    alt: "char",
                    iconUrl: "../../../../../../../../assets/images/char.svg",
                  }
                ),
                alt: `${c.id}`,
                draggable: true,
              }
              );
              chair.id = c.id;
              chair.hallId = c.hallId;
              chair.rotation = c.rotation;
              chair.chairNumber = c.chairNumber;
              chair.guestUserId = c.guestUserId;
              chair.guestUser = c.guestUser;
              chair.employeeUserId = c.employeeUserId;
              chair.employeeUser = c.employeeUser;
              chair.chairTypeId = c.chairTypeId;
              chair.chairType = c.chairType;
              chair.statusId = c.statusId;
              chair.status = c.status;
              chair.hallId = c.hallId;
              chair.createdAt = c.createdAt;
              chair.updatedAt = c.updatedAt;
              chair.
                bindTooltip(`${chair.chairNumber}`,
                  { direction: 'top', className: 'title', offset: new L.Point(14, 0) }
                ).bindPopup(chair.guestUser?.fullName ?? "Empty");
              chair.addEventListener('click', (event) => {
                if (chair.guestUserId == null)
                  this._modal.open(this.addGuest, { size: 'lg' });
                localStorage.setItem("chairId", `${chair.id}`);
              });
              chair.addEventListener('dblclick', (event) => {
                localStorage.setItem("chairId", `${chair.id}`);

                this._modal.open(this.deleteChair);
              });
              chair.addEventListener("dragend", (event) => {
                //ToDo:updateLocatin in Api
                let chairChangeLcatin: ChairChangeLocaton = {
                  id: chair.id,
                  x: chair.getLatLng().lat,
                  y: chair.getLatLng().lng,
                  rotation: chair.rotation
                };
                this._chairService.updateChairLcation(chairChangeLcatin).subscribe({
                  next: (res) => {
                    //console.log(res);
                  }
                });
              });
              this.chairmarkers.push(chair);
            });
          },
          error: (error) => {
    // console.log(error);
            this._toastService.error(error.error.message);
          },
          complete: () => {
            this.initMap();
            this.markerDoorOne.addTo(this.map);
            this.markerDoorTwo.addTo(this.map);
            this.markerStage.addTo(this.map);
            this.addActionsToGatesAndStage();
            this.chairmarkers.forEach(m => {
              m.addTo(this.map);
            });
            // this.Createmarkers(this.createListOfLatLng(this.numberOfChairsParams));
          }
        });

      },
      error: (error: HttpErrorResponse) => {
// console.log(error);
        this._toastService.error(error.error.message);

      }
    });

  }
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
    });
  }

  deleteMarker(id: string) {
    let index = this.chairmarkers.findIndex(m => m.chairNumber == id);
    this.chairmarkers.splice(index, 1);
  }

  Createmarkers(markerCoords: Chair[]) {
    for (const coords of markerCoords) {
      const marker = this.Createmarker([coords.x, coords.y], coords.id);
      // this.chairmarkers.addLayer(marker);
    }
  }

  Createmarker(coords: number[], id: number) {
    const marker = L.marker([coords[0], coords[1]], {
      attribution: `${++this.counter}`,
      icon: new L.Icon(
        {
          className: "img-char",
          alt: "char",
          iconUrl: "../../../../../../../../assets/images/char.svg",
        }
      ),
      alt: `${id}`,
      draggable: true,
    }).
      addEventListener('dblclick', (res) => {
// console.log("remoove chair");
      }).
      bindTooltip(`${this.counter}`,
        { direction: 'top', className: 'title', offset: new L.Point(14, 0) }
      ).bindPopup('أحمد إبراهيم أبو نجا').addTo(this.map);

    return marker;
  }

  AddMarkerToChairList(chair: ChairMarker) {
    this.chairmarkers.push(chair);
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
  img = "../../../../../../../../assets/images/uploadImage.svg";
  SubmitAddGuestFrm() {
    if (!localStorage.getItem("chairId")) {
      return;
    }

    this.addGuestForm.value.chairId = +localStorage.getItem("chairId")!;
    this._guestService.registerGuest(this.addGuestForm.value).subscribe({
      next: (res) => {
        let chair = this.chairmarkers.find(x => x.id == +this.addGuestForm.value.chairId);
        chair?.getPopup()?.setContent(this.addGuestForm.value.fullName);
        chair?.setGuestId(res.response.id);
      },
      error: (error) => {
// console.log(error);
        this._toastService.error((error.errors as string[]).join('\n'));
      },
      complete: () => {
        localStorage.removeItem("chairId");
        this.img = "../../../../../../../../assets/images/uploadImage.svg";
        this.addGuestForm.reset();
        this._modal.dismissAll();
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
      this.addGuestForm.patchValue({
        imageFile: file,
      });
    }
  }

  openModal(content: any) {
    this._modal.open(content, { ariaLabelledBy: 'modal-title' }).result.then((result) => {
      // Handle modal result here
      // console.log(result);\
    },() => {
      // Handle modal dismissal here
      //console.log(reason);
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
        //console.log(res);
        this._toastService.success(res.message);
      }
    });
  }
  hallId: number;


  CreateMarker() {

    let latlng = localStorage.getItem("latng");
    if (latlng == null) return;

    // console.log(latlng.split(',')[0] + " : " + latlng.split(',')[1]);

    let createChair: CreateChair = {
      hallId: this.hallId,
      chairNumber: `${++this.counter}`,
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
        this.chairmarkers.push(chairMarker);
      },
      error: (err) => {
// console.log(err);
        this._toastService.error(err.error.message);
      },
      complete: () => {
        this._modal.dismissAll();
      }
    });
  }

  deleteChairMethod() {
    let id = localStorage.getItem("chairId");
    if (id)
      this._chairService.deleteChair(+id).subscribe({
        next: (res) => {
          let index = this.chairmarkers.findIndex(c => c.id == +id!);
          let marker = this.chairmarkers.find(c => c.id == +id!);
          this.chairmarkers.splice(index, 1);
          marker?.remove();
          //console.log(res);
        },
        error: (error) => {
  // console.log(error);
          this._toastService.error(error.error.message);
        },
        complete: () => {
          localStorage.removeItem("chairId");
          this._modal.dismissAll();
        }
      });
  }
}