import { ProofCertificate } from "./ProofCertificate";
import { UserResponse } from "./auth";
import { BaseEntity } from "./base-entity";
import { Certificate } from "./certificate";
import { ClassDateTime } from "./classdatetime";
import { Status } from "./status";

export interface Invitaion extends BaseEntity{
    jopTitle: string;
    jopTitleAR: string;
    description: string;
    descriptionAR: string;
    fromStart: string;
    toEnd: string;
    numberOfHours: number;
    numberOfDays: number;
    addressHint: string;
    addressLink: string;
    certificateCreated: boolean;
    volunteerUser: UserResponse;
    volunteerUserId: string;
    statusId:number;
    status: Status;
    classDateTimes:ClassDateTime[];
    fullName:string;
    email:string;
    phoneNumber:number;
    certificates:Certificate;
    invitations:Invitaion;
    daysAsString:string|null;
    start:string;
    end:string;
    creatorId:string|null;
    proofCertificate:ProofCertificate|null;
}
export interface InvitaionReport{
    fullName: string,
    email: string,
    phoneNumber: string,
    invitations: number,
    approved: number,
    rejected: number,
    proof: number,
    certificates: number
}
export function invitaionToformData(model: Invitaion){
    let form = new FormData();
    if(model.id)form.append("id", model.id.toString());
    form.append("addressHint", model.addressHint.toString());
    form.append("jopTitle", model.jopTitle.toString());
    form.append("jopTitleAR", model.jopTitleAR.toString());
    form.append("description", model.description.toString());
    form.append("descriptionAR", model.descriptionAR.toString());
    form.append("fromStart", model.fromStart.toString());
    form.append("toEnd", model.toEnd.toString());
    form.append("numberOfHours", model.numberOfHours.toString());
    form.append("numberOfDays", model.numberOfDays.toString());
    form.append("addressHint", model.addressHint.toString());
    form.append("addressLink", model.addressLink.toString());
    form.append("volunteerUserId", model.volunteerUserId.toString());
    form.append("statusId", model.statusId.toString());
    form.append("start", model.start.toString());
    form.append("end", model.end.toString());
    if(model.creatorId)form.append("creatorId", model.creatorId.toString());
 
    if(model.daysAsString)form.append("daysAsString", model.daysAsString.toString());
 
    return form;
}