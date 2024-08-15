import { Invitaion } from "./Invitation";
import { BaseEntity } from "./base-entity";

export interface ProofCertificate extends BaseEntity {
    image:string|null;
    imageFile:File|null;
    fromHour:string;
    toHour:string;
    note:string;
    invitationId:number;
    invitation:Invitaion;
    certificateCreated:boolean;
}