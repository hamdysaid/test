import { Invitaion } from "./Invitation";
import { UserResponse } from "./auth";
import { BaseEntity } from "./base-entity";
import { Certificate } from "./certificate";
import { ClassDateTime } from "./classdatetime";
import { Degree } from "./degree";
import { Gender } from "./gender";
import { Principalitie } from "./principalitie";

export interface VolunteerStatus extends BaseEntity{
    name:string;
    nameAR:string;
    color:string;
}
export interface Volunteer{
    id:string;
    dateTimeEnd:string;
    dateTimeStart:string
    fullName:string | null;
    email:string | null;
    phoneNumber:number | null;
    principality:Principalitie;
    principalityId: number | null;
    gender:Gender;
    genderId: number | null;
    dateOfBirth: string | null;
    degree:Degree;
    degreeId: number | null;
    universityName:string | null;
    currentWorkPlace:string | null;
    addressHint:string | null;
    internationalId:number | null;
    invitations:Invitaion[] | null;
    classDateTimes:ClassDateTime[]|null;
    certificates:Certificate[] |null;
}
export interface VolunteerReport{
    fullName: string,
    email: string,
    isActive: boolean,
    createdAt: string,
    internationalId: number,
    stateName: string,
    stateNameAr: string,
    gender: string,
    genderAr:string,
    dateOfBirth: string,
    phoneNumber: string,
    degree: string,
    degreeAr:string,
    currentWorkPlace: string,
    universityName: string,
    addressHint: string,
    addressLink: string,
    available: boolean
}