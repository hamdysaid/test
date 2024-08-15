import { BaseEntity } from "./base-entity";

export interface ClassDateTime extends BaseEntity{
    day:number;
    start: string;
    end:string;
}