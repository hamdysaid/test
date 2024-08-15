import { Time } from "@angular/common";
import { UserResponse } from "./auth";
import { BaseEntity } from "./base-entity";
import { Status } from "./status";

export interface Agenda extends BaseEntity{ 
    name:string;
    nameAR:string;
    dateTimeEnd:string;
    dateTimeStart:string;
    description:string;
    descriptionAR:string;
    endHour:string;
    startHour:string;
    leaderId:string;
    leader:UserResponse | null;
    status:Status | null;
    statusId:number;
    emplyeeEmailsAsString:string;
    toDoEmployees: UserResponse[];
    employees: UserResponse[];
}

export interface AgendaReport extends BaseEntity{ 
    name:string,
    nameAR: string,
    description:string,
    descriptionAR: string,
    dateTimeStart: string,
    dateTimeEnd: string,
    startHour:string,
    endHour: string,
    manager: string,
    status: Status,
    statusAr:string
}
export function AgendaToFomData(model:Agenda){
    let formData = new FormData();
    formData.append("name",model.name);
    formData.append("nameAR",model.nameAR);
    formData.append("dateTimeEnd",model.dateTimeEnd);
    formData.append("dateTimeStart",model.dateTimeStart);
    formData.append("description",model.description);
    formData.append("descriptionAR",model.descriptionAR);
    formData.append("endHour",model.endHour);
    formData.append("startHour",model.startHour);
    formData.append("leaderId",model.leaderId);
    formData.append("statusId",model.statusId.toString());
    formData.append("emplyeeEmailsAsString",model.emplyeeEmailsAsString);
    return formData;
}
