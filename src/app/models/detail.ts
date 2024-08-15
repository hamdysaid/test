import { DayOfWeek } from "./dayOfWeek";
import { Degree } from "./degree";
import { Department } from "./department";
import { Gender } from "./gender";
import { Principalitie } from "./principalitie";
import { Status } from "./status";

export interface DataForUserRegister{
    genders: Gender[];
    degrees: Degree[];
    principalities: Principalitie[];
    eventStatus: Status[];
    employeeStatus: Status[];
    volunteerStatus: Status[];
    chairStatus: Status[];
    certificateStatus: Status[];
    guestStatus: Status[];
    agendaStatus: Status[];
    invitationStatus: Status[];
    departments: Department[];
    dayOfWeeks: DayOfWeek[];
}

export interface ChartsForUserNumbers{
    volunteer: number;
    employee: number;
    agenda: number;
    event: number;
}