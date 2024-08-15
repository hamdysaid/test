import { Department } from "./department";
import { Principalitie } from "./principalitie";

export interface EmployeeResponse {
    id: string;
    fullName: string;
    email: string;
    phoneNumber: string;
    principality: Principalitie;
    startWorkTime: string;
    endWorkTime: string;
    department: Department;
    isActive: boolean;
    image: string;
    internationalId: string;
    employeeNumber: string;
    deletedAt?: Date
}

export interface SearchForEmployee {
    search: string | null;
    principalityId: number | null;
    start: string | null;
    end: string | null;
    isActive: true | null;
    departmentId: number | null;
    page: number;
    pageSize: number;
}