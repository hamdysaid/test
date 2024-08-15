import { BaseEntity } from "./base-entity";

export interface EventStatus extends BaseEntity{
    name:string;
    nameAR:string;
    color:string;
}