import { BaseEntity } from "./base-entity";
import { Status } from "./status";

export interface Employee extends BaseEntity{
    name:string;
    nameAR:string;
    color:string;
}
export interface EmployeeReport{
    fullName: string,
    email: string,
    phoneNumber: number,
    principality: string,
    principalityAr:string
    startWorkTime: string,
    endWorkTime: string,
    department: string,
    departmentAr:string,
    departmentColor: string,
    isActive: boolean,
    status: Status,
    statusAr:string,
    employeeNumber: number,
    internationalId: number
}
export interface EmployeeChart{
    absence:number;
    annual:number;
    attended:number;
    sick:number;
}