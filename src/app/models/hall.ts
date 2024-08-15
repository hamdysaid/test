import { LatLngExpression, Marker, MarkerOptions } from "leaflet";
import { BaseEntity } from "./base-entity"
import { Chair } from "./chair";

export interface Hall extends BaseEntity
{
    eventId: number;
    exitGate: Place;
    entranceGate: Place;
    honoraryPodium: Place;
    chairs: Chair[];
}

export interface Place extends BaseEntity{
    x: number,
    y: number,
    rotation: number
}

export class PlaceMarker extends Marker implements Place{
    x: number;
    y: number;
    rotation: number;
    id: number;
    createdAt: Date | null;
    updatedAt: Date | null;
    constructor(latlng: LatLngExpression, options?: MarkerOptions) {
        super(latlng, options);
        this.x = this.getLatLng().lat;
        this.y = this.getLatLng().lng;
    }
    setLocatin( x: number, y: number){
        this.x = x;
        this.y = y;
        this.setLatLng([x,y]);
    }

    setId(id:number){
        this.id = id;
    }
}