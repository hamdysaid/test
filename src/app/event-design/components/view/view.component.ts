import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as L from 'leaflet';
import { ToastrService } from 'ngx-toastr';
import { Observable, firstValueFrom, tap } from 'rxjs';
import { ChairMarker } from 'src/app/models/Marker/chair-marker';
import { UserResponse } from 'src/app/models/auth';
import { Chair, ChairChangeLocaton, ChairType, CreateChair } from 'src/app/models/chair';
import { GuestResponse } from 'src/app/models/guest';
import { PlaceMarker, Place } from 'src/app/models/hall';
import { ChairService } from 'src/app/service/chair.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { EventStatusService } from 'src/app/service/event-status.service';
import { GuestService } from 'src/app/service/guest.service';
import { HallService } from 'src/app/service/hall.service';
import { PlaceService } from 'src/app/service/place.service';
import { UserService } from 'src/app/service/user.service';
import { getChairImageAccedingToColor } from 'src/app/utils/extensions';
import { environment } from 'src/environments/environment';

// http://localhost:4200/event/hall/guest-view?event_id=118&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibm9vcnJhZWQyMDE4QGdtYWlsLmNvbSIsImlzQWN0aXZlIjoiVHJ1ZSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6Imd1ZXN0IiwiZXhwIjoxNzE3MDg5MTMzLCJpc3MiOiJBaG1hZEhhc2FuIiwiYXVkIjoiQWhtYWRIYXNhbiJ9.mZEd7EZSQzK7oHFFWDXN2x3Ph0CZPi-b-g5lBVnQd8Y

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  imagePath = environment.imageEndPoint;
  currentUserId?: string;
  currentGuestChair: Chair;
  counter: number = 1;
  hallId: number;

  @ViewChild('guestStatusModal', { static: true }) guestStatusModal: TemplateRef<any>;

  private centroid: L.LatLngExpression = [0, 0]; //
  private map: L.Map;
  private _chairMarker: ChairMarker[] = [];

  markerDoorOne = new PlaceMarker([0.001, 0.012], { icon: new L.Icon({ alt: "door1", iconUrl: "/assets/images/door1.svg" }), draggable: false });
  markerDoorTwo = new PlaceMarker([0.001, -0.013], { icon: new L.Icon({ alt: "door2", iconUrl: "/assets/images/door2.svg" }), draggable: false });
  markerStage = new PlaceMarker([0.0052, -0.003], { icon: new L.Icon({ alt: "stage", iconUrl: "/assets/images/stage.svg" }), draggable: false });

  constructor(
    private _routr: Router,
    private _toastService: ToastrService,
    private _activatedRour: ActivatedRoute,
    private _placeService: PlaceService,
    private _chairService: ChairService,
    private _hallService: HallService,
    private _employeeService: EmployeeService,
    private _guestService: GuestService,
    private _userService: UserService,
    private _modal: NgbModal,
    private _eventStatusService: EventStatusService,
  ) { }

  async ngOnInit(): Promise<void> {
    this._eventStatusService.Get().subscribe({
      next: (res) => {
        console.log(res);

      }
    });
    const queryParams = this._activatedRour.snapshot.queryParams;
    const eventId: number = +queryParams['event_id'];
    const token: string = queryParams['token'];

    if (eventId == null || token == null) this._routr.navigate(["/"]);

    this._userService.saveFromQuery(token);
    this.currentUserId = (await firstValueFrom(this._userService.getCurrentUserData())).id;
    this.getHall(eventId);
  }

  openModal(content: any) {
    this._modal.dismissAll();
    this._modal.open(content, { ariaLabelledBy: 'modal-title' }).result.then((result) => {
      // Handle modal result here
      // console.log(result);
    }, () => {
      // Handle modal dismissal here
      //console.log(reason);
    });
  }

  getHall(id: number) {
    this._hallService.getHallbyEventId(id).pipe(
      tap({
        next: (res) => {
          res.response.chairs.forEach(chair => {

            let chairMarker: ChairMarker = new ChairMarker(
              [chair.x, chair.y],
              {
                attribution: `${chair.chairNumber}`,
                icon: new L.Icon({ alt: "char", iconUrl: this.selectChairImage(chair), }),
                alt: `${chair.id}`,
                draggable: false,
              }
            );

            // chairMarker.id = chair.id;
            // chairMarker.hallId = chair.hallId;
            // chairMarker.rotation = chair.rotation;
            // chairMarker.chairNumber = chair.chairNumber;
            // chairMarker.guestUserId = chair.guestUserId;
            // chairMarker.guestUser = chair.guestUser;
            // chairMarker.employeeUserId = chair.employeeUserId;
            // chairMarker.employeeUser = chair.employeeUser;
            // chairMarker.chairTypeId = chair.chairTypeId;
            // chairMarker.chairType = chair.chairType;
            // chairMarker.statusId = chair.statusId;
            // chairMarker.status = chair.status;
            // chairMarker.hallId = chair.hallId;
            // chairMarker.createdAt = chair.createdAt;
            // chairMarker.updatedAt = chair.updatedAt;
            // chairMarker
            //   .bindTooltip(`${chair.chairNumber}`, { direction: 'top', className: 'title', offset: new L.Point(14, 0) }
            //   ).bindPopup(chair.guestUser?.fullName ?? "Empty", { offset: new L.Point(14, 0) });
            // console.log(chair);
            if (chair.guestUserId === this.currentUserId) {
              // chairMarker.bindPopup(chair.guestUser?.fullName ?? "Empty", { offset: new L.Point(25, 0), autoPan: true });
              this.currentGuestChair = chair;
              chairMarker.addEventListener('click', (event) => {
                const model = this._modal.open(this.guestStatusModal, { size: 'lg' });
                this.guestStatusModal.elementRef.nativeElement.chair = chair;
                // model.componentInstance.chair = chair;
              });
            }
            this._chairMarker.push(chairMarker);
          });
          this.markerDoorOne.setLatLng([res.response.exitGate.x, res.response.exitGate.y]);
          this.markerDoorTwo.setLatLng([res.response.entranceGate.x, res.response.entranceGate.y]);
          this.markerStage.setLatLng([res.response.honoraryPodium.x, res.response.honoraryPodium.y]);
        }
      })
    ).subscribe({
      next: (res) => { },
      error: (error) => {
        this._toastService.error(error.error.message);
      },
      complete: () => {
        this.initMap();
      }
    });
  }

  selectChairImage(chair: Chair): string {
    if (chair.guestUserId === this.currentUserId) return getChairImageAccedingToColor.black;
    if (chair.chairTypeId === 1) return getChairImageAccedingToColor.golden;
    return getChairImageAccedingToColor.default;
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 16,
      zoomControl: true,
      attributionControl: false,
      maxZoom: 16,
      minZoom: 16,
    });

    L.tileLayer('/assets/images/White-Background-PNG-Photo.png').addTo(this.map);

    this.markerDoorOne.addTo(this.map);
    this.markerDoorTwo.addTo(this.map);
    this.markerStage.addTo(this.map);
    this._chairMarker.forEach(m => m.addTo(this.map));
  }
}
