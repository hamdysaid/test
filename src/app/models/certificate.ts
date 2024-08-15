import { Invitaion } from "./Invitation";
import { UserResponse } from "./auth";
import { BaseEntity } from "./base-entity";
import { Status } from "./status";
import { Volunteer } from "./volunteer";

export interface Certificate extends BaseEntity {
    signature: string,
    signatureFile:File|null,
    volunteerUserId: string,
    volunteerUser: UserResponse| Volunteer | null,
    creatorId: string,
    statusId: number,
    status: Status| null,
    invitationId: number,
    invitation: Invitaion| null,
    id:number;
    dateTimeStart:string;
    dateTimeEnd:string;
    eventName:string;
    numberHours:number;
    fullName: string,
}
export function CertificateToFormData(model:Certificate){
    let form = new FormData();
    if(model.signatureFile)form.append("signatureFile",model.signatureFile);
    form.append("creatorId",model.creatorId);
    form.append("InvitationId",`${model.invitationId}`);
    form.append("volunteerUserId",`${model.volunteerUserId}`);
    form.append("statusId", '23');
    return form;
}