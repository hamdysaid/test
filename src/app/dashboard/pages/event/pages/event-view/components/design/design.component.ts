import { Component, Input, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { ChairMarker } from 'src/app/models/Marker/chair-marker';
import { ReceiveChairStatus } from 'src/app/models/chair';
import { HallService } from 'src/app/service/hall.service';
import { getChairImageAccrdingToStatus } from 'src/app/utils/extensions';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  @Input() EventId: number;
  private centroid: L.LatLngExpression = [0, 0]; //
  private map: L.Map;
  private _chairMarker: ChairMarker[] = [];
  markerDoorOne = L.marker([0.001, 0.012], {
    icon: new L.Icon(
      {
        alt: "door1",
        iconUrl: "../../../../../../../../assets/images/door1.svg"
      }
    ),
    draggable: false
  });

  markerDoorTwo = L.marker([0.001, -0.013], {
    icon: new L.Icon(
      {
        alt: "door2",
        iconUrl: "../../../../../../../../assets/images/door2.svg"
      }
    ),
    draggable: false
  });

  markerStage = L.marker([0.0052, -0.003], {
    icon: new L.Icon(
      {
        alt: "stage",
        iconUrl: "../../../../../../../../assets/images/stage.svg"
      }
    ),
    draggable: false
  });
  constructor(private _hallService: HallService, private _toastService: ToastrService) { }
  ngOnInit(): void {
    this.getHall(this.EventId);
    this._hallService.ConnectToChairHub();
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
      // let marker = this.Createmarker([res.latlng.lat, res.latlng.lng],0); // here we need t call api to create marker then shoow the marker
      // console.log(marker.getTooltip()?.getContent());
      // console.log("here we need t call api to create marker then shoow the marker");
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
                icon: new L.Icon(
                  {
                    className: "img-char",
                    alt: "char",
                    iconUrl: getChairImageAccrdingToStatus[chair.statusId ?? 0],
                  }
                ),
                alt: `${chair.id}`,
                draggable: false,
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
            ).bindPopup(chair.guestUser?.fullName ?? "Empty", { offset: new L.Point(14, 0) });
            // console.log(chair);
            this._chairMarker.push(chairMarker);
            this.markerDoorOne.setLatLng([res.response.exitGate.x, res.response.exitGate.y]);
            this.markerDoorTwo.setLatLng([res.response.entranceGate.x, res.response.entranceGate.y]);
            this.markerStage.setLatLng([res.response.honoraryPodium.x, res.response.honoraryPodium.y]);
          });
        }
      })
    ).subscribe({
      next: (res) => { },
      error: (error) => {
        this._toastService.error(error.error.message);
      },
      complete: () => {
        this.initMap();
        this.AddAllhalToMap();
        this.ReceiveChairStatus();
      }
    });
  }

  private AddAllhalToMap() {
    this.markerDoorOne.addTo(this.map);
    this.markerDoorTwo.addTo(this.map);
    this.markerStage.addTo(this.map);
    this._chairMarker.forEach(m => {
      m.addTo(this.map);
    });
  }

  ReceiveChairStatus() {
    this._hallService.hubConnection.on('ReceiveChairStatus', (msg: ReceiveChairStatus) => {
      // console.log(msg);
      this._chairMarker.find(c => c.id == msg.id)?.setSatusId(msg.statusId);
    });
  }
}
