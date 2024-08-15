import { BaseEntity } from './base-entity';
import { Status } from './status';

export interface GusetReport {
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  invitations: number;
  accepted: number;
}

export interface GuestResponse extends BaseEntity{
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  image: string;
  isActive: boolean;
  status: Status;
  invitations: number;
}
export interface Guest extends BaseEntity {
  name: string;
  nameAR: string;
  color: string;
}

export interface RegisterGuest {
  image: string | null;
  imageFile: File | null;
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  employeeId: string | null;
  chairId: string;
}

export function RegisterGuestToformData(model: RegisterGuest) {
  let form = new FormData();

  form.append('fullName', model.fullName.toString());
  form.append('email', model.email.toString());
  form.append('phoneNumber', model.phoneNumber.toString());
  form.append('country', model.country.toString());
  if (model.employeeId) form.append('employeeId', model.employeeId.toString());
  form.append('chairId', model.chairId.toString());

  if (model.image) form.append('image', model.image.toString());
  if (model.imageFile) form.append('imageFile', model.imageFile);

  return form;
}
