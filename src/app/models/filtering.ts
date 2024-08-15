export interface AgendaFilter {
  search: string| null;
  startDate: string| null;
  endDate: string| null;
  startTime: string| null;
  endTime: string| null;
  leaderId: string| null;
  statusId: number| null;
  page: number;
  pageSize: number;
}
export interface VolunteerFilter {
  search: string| null;
  startDate: string| null;
  endDate: string| null;
  principalityId: number| null;
  genderId: number| null;
  degreeId: number| null;
  page: number;
  pageSize: number;
}
export interface InvitationFilter {
  search: string| null;
  startTime: string| null;
  endTime: string| null;
  principalityId: number| null;
  statusId: number| null;
  page: number;
  pageSize: number;
}
export interface EmployeeFilter {
  search: string| null;
  startTime: string| null;
  endTime: string| null;
  statusId: number| null;
  principalityId: number| null;
  departmentId: number| null;
  page: number;
  pageSize: number;
}
export interface EventFilter {
  search: string| null;
  startTime: string| null;
  endTime: string| null;
  statusId: number| null;
  page: number;
  pageSize: number;
}
