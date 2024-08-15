import { Icon, LatLngExpression, Marker, MarkerOptions } from "leaflet";
import { Chair } from "../chair";
import { EmployeeResponse } from "../employee-response";
import { GuestResponse } from "../guest";
import { Status } from "../status";
import { getChairImageAccrdingToStatus } from "src/app/utils/extensions";
export class ChairMarker extends Marker implements Chair{
    chairNumber: string;
    x: number;
    y: number;
    rotation: number;
    guestUserId: string | null;
    guestUser: GuestResponse | null;
    employeeUserId: string | null;
    employeeUser: EmployeeResponse | null;
    chairTypeId: number;
    chairType: Status | null;
    statusId: number | null;
    status: Status | null;
    hallId: number;
    id: number;
    createdAt: Date | null;
    updatedAt: Date | null;

    constructor(latlng: LatLngExpression, options?: MarkerOptions) {
        super(latlng, options);
        this.x = this.getLatLng().lat;
        this.y = this.getLatLng().lng;
    }

    setGuestId(id:string){
        this.guestUserId = id;
    }

    setSatusId(id:number){
        this.statusId = id;
        this.setIcon(new Icon(
            {
              className:"img-char",
              alt:"char",
              iconUrl: getChairImageAccrdingToStatus[id ?? 0],
            }
          ))
    }

}