import { BaseEntity } from "./base-entity";
import { EventStatus } from "./eventStatus";


export interface Event extends BaseEntity{
    hallImage: string | null,
    hallImageFile: File | null,
    name:string,
    nameAR:string,
    description: string ,
    descriptionAR: string ,
    locationHint: string,
    locationLink: string,
    startHour:string,
    endHour: string,
    startDate: string,
    endDate: string,
    status: EventStatus,
    statusId: number,
    eventSpeakers:EventSpeakers,
    eventSchedules:EventSchedules,
}
export function EventToFormData(model:Event){
    let form = new FormData();
    if(model.id)form.append("id",`${model.id}`);
    if(model.hallImage)form.append("hallImage",model.hallImage);
    if(model.hallImageFile)form.append("hallImageFile",model.hallImageFile);
    form.append("name",model.name);
    form.append("nameAR",model.nameAR);
    form.append("description",model.description);
    form.append("descriptionAR",model.descriptionAR);
    form.append("locationHint",model.locationHint);
    form.append("locationLink",model.locationLink);
    form.append("startHour",model.startHour);
    form.append("endHour",model.endHour);
    form.append("startDate",model.startDate);
    form.append("endDate",model.endDate);
    form.append("statusId",model.statusId.toString());
    return form;
}
export interface EventSpeakers extends BaseEntity{
    fullName: string,
    fullNameAR: string,
    specialization: string,
    specializationAR: string,
    image: string|null,
    imageFile: File|null,
    eventId: number,
}
export function EventSpeakersToFormData(model:EventSpeakers){
    let form = new FormData();
    if(model.id)form.append("id",`${model.id}`);
    if(model.image)form.append("image",model.image);
    if(model.imageFile)form.append("imageFile",model.imageFile);
    form.append("fullName",model.fullName);
    form.append("fullNameAR",model.fullNameAR);
    form.append("specialization",model.specialization);
    form.append("specializationAR",model.specializationAR);
    form.append("eventId",model.eventId.toString());
    return form;
}

export interface EventSchedules extends BaseEntity{
    startHour:string,
    endHour: string,
    description:string,
    descriptionAR:string,
    event: Event,
    eventId: Number,
}
export function EventSchedulesToFormData(model:EventSchedules){
    let form = new FormData();
    if(model.id)form.append("id",`${model.id}`);
    form.append("startHour",model.startHour);
    form.append("endHour",model.endHour);
    form.append("description",model.description);
    form.append("descriptionAR",model.descriptionAR);
    form.append("eventId",model.eventId.toString());
    return form;
}


export interface EventSponsors extends BaseEntity{
    name: string,
    nameAR: string,
    image: string|null,
    imageFile: File|null,
    event: Event,
    eventId: Number,
}
export function EventSponsorsToFormData(model:EventSponsors){
    let form = new FormData();
    if(model.id)form.append("id",`${model.id}`);
    if(model.image)form.append("image",model.image);
    if(model.imageFile)form.append("imageFile",model.imageFile);
    form.append("name",model.name);
    form.append("nameAR",model.nameAR);
    form.append("eventId",model.eventId.toString());
    return form;
}

export interface EventReport{
    id: number,
    name: string,
    nameAR:string,
    startDate: string,
    endDate: string,
    startHour: string,
    endHour: string,
    status: string,
    statusAr:string,
    color: string,
    numberOfGuest: number,
    attended: number,
    late:number,
    absent:number,
    onWay: number,
    apologize:number
}
