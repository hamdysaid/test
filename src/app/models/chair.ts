import { UserResponse } from "./auth";
import { BaseEntity } from "./base-entity";
import { EmployeeResponse } from "./employee-response";
import { GuestResponse } from "./guest";
import { Status } from "./status";

export type ChairType = 1 |2;

export interface CreateChair
{
    chairNumber: string,
    hallId: number,
    x: number,
    y: number,
    rotation: number,
    chairTypeId: number 
}
export interface ChairChangeLocaton{
  id: number;
  x: number;
  y: number;
  rotation: number;
}
export interface Chair extends BaseEntity 
{
    chairNumber: string;
    x: number;
    y: number;
    rotation: number;
    guestUserId: string| null;
    guestUser: GuestResponse | null;
    employeeUserId: string| null;
    employeeUser: EmployeeResponse | null;
    chairTypeId: number;
    chairType: Status| null;
    statusId: number| null;
    status: Status| null;
    hallId: number;
  }

  export interface ReceiveChairStatus{
    id:number;
    statusId:number;
  }
