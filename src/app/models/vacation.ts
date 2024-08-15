import { BaseEntity } from './base-entity';
import { EmployeeResponse } from './employee-response';
import { VacationType } from './vacation-type';

export interface Vacation extends BaseEntity {
  startDate: string;
  endDate: string;
  note: string;
  vacationTypeId: number;
  vacationType: VacationType;
  employeeUserId: string;
  employeeUser: EmployeeResponse;
}
