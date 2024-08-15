import { ClassDateTime } from "./classdatetime";
import { Principalitie } from "./principalitie";
import { Status } from "./status";

export interface LoginRequest {
  email: string;
  password: string;
}
// export function UserLogInToFormData(userLogIn:LoginRequest){
//   let formData: FormData = new FormData();
//   formData.append("Email", userLogIn.email);
//   formData.append("password", userLogIn.password);  
//   return formData;
// }
export interface AuthResponse<T> {
  message: string;
  token: Token;
  response: T;
}

export interface Token {
  token: string;
  expiration: Date;
  userType: string;
  userPolicy: {
    AddGuest: boolean
    
    CreateAgenda: boolean
    CreateCertificate: boolean
    CreateEvent: boolean
    CreateInvitation: boolean
    CreateReport: boolean

    DeleteAgenda: boolean
    DeleteEvent: boolean
    DeleteInvitation: boolean

    ReportAgenda: boolean
    ReportEmployee: boolean
    ReportEvent: boolean
    ReportGuest: boolean
    ReportVolunteer: boolean

    UpdateAgenda: boolean
    UpdateEvent: boolean
    UpdateInvitation: boolean
    Vacation: boolean
  }
}

export interface UserResponse {
  id: string;
  userName: string;
  email: string;
  phoneNumber: string;
  image: string;
  fullName: string;
  fullNameAR: string;
  isActive: boolean;
  internationalId: string | null;
  employeeNumber: string;
  status: Status;
  principalityId: number;
  departmentId: number;
  principality: Principalitie;
  startWorkTime: string;
  endWorkTime: string;
  imageFile: File | null;
  available: boolean;
  addressHint: string | null;
  dateOfBirth: string | null;
  classDateTimes: ClassDateTime[] | null;
}


export interface UserResponseData {
  id: string;
  userName: string;
  email: string;
  phoneNumber: string;
  image: string;
  fullName: string;
  fullNameAR: string;
  isActive: boolean;
  internationalId: string | null;
  employeeNumber: string;
  status: Status;
  principalityId: number;
  departmentId: number;
  startWorkTime: string;
  endWorkTime: string;
  imageFile: File | null;
  principality: Principalitie;
  addressHint: string;
  addressLink: string;
  classDateTimes: ClassDateTime[];
  deletedAt: Date | null;
}

export function UserResponseToFormData(employeeRegister: UserResponse) {
  let formData: FormData = new FormData();
  formData.append("Email", employeeRegister.email);
  formData.append("phoneNumber", employeeRegister.phoneNumber);
  formData.append("fullName", employeeRegister.fullName);
  formData.append("fullNameAR", employeeRegister.fullNameAR);
  formData.append("principalityId", employeeRegister.principalityId.toString());
  if (employeeRegister.internationalId) formData.append("internationalId", employeeRegister.internationalId);
  if (employeeRegister.imageFile) formData.append("imageFile", employeeRegister.imageFile);
  formData.append("image", employeeRegister.image);
  formData.append("departmentId", employeeRegister.departmentId.toString());
  formData.append("employeeNumber", employeeRegister.employeeNumber);
  formData.append("startWorkTime", employeeRegister.startWorkTime);
  formData.append("endWorkTime", employeeRegister.endWorkTime);
  return formData;
}


export interface EmployeeRegister {
  email: string;
  password: string;
  phoneNumber: string;
  fullName: string;
  fullNameAR: string;
  principalityId: number;
  internationalId: string;
  imageFile: File;
  departmentId: number;
  employeeNumber: string;
  startWorkTime: string;
  endWorkTime: string;
}

// export function EmployeeRegisterToFormData(employeeRegister: EmployeeRegister) {
//   let formData: FormData = new FormData();
//   formData.append("Email", employeeRegister.email);
//   formData.append("password", employeeRegister.password);
//   formData.append("phoneNumber", employeeRegister.phoneNumber);
//   formData.append("fullName", employeeRegister.fullName);
//   formData.append("fullNameAR", employeeRegister.fullNameAR);
//   formData.append("principalityId", employeeRegister.principalityId.toString());
//   formData.append("internationalId", employeeRegister.internationalId);
//   formData.append("imageFile", employeeRegister.imageFile);
//   formData.append("departmentId", employeeRegister.departmentId.toString());
//   formData.append("employeeNumber", employeeRegister.employeeNumber);
//   formData.append("startWorkTime", employeeRegister.startWorkTime);
//   formData.append("endWorkTime", employeeRegister.endWorkTime);
//   return formData;
// }


export interface ChangePassword {
  currentPassword: string;
  newPassword: string;
}

// export function ChangePasswordToFormData(ChangePassword: ChangePassword) {
//   let formData: FormData = new FormData();
//   formData.append("currentPassword", ChangePassword.currentPassword);
//   formData.append("newPassword", ChangePassword.newPassword);
//   return formData;
// }