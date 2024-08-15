import { DatePipe, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserResponse } from 'src/app/models/auth';
import { NotificationService } from 'src/app/service/notification.service';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit{

  language:string;
  userResponse:UserResponse= {
    id: '',
    userName: 'Super Admin',
    email: '',
    phoneNumber: '',
    image: '',
    fullName: 'Super Admin',
    fullNameAR: '',
    isActive: false,
    internationalId: null,
    employeeNumber: '',
    status: {
      name: '',
      nameAR: '',
      color: '',
      id: 0,
      createdAt: null,
      updatedAt: null
    },
    principalityId: 0,
    departmentId: 0,
    startWorkTime: '',
    endWorkTime: '',
    imageFile: null,
    principality: {
      id: 0,
      createdAt: null,
      name: "",
      nameAR: "",
      updatedAt: null
    },
    available: false,
    dateOfBirth: null,
    addressHint: null,
    classDateTimes: null
  };
  role:string = "";
  imagePath = environment.imageEndPoint.med;
  constructor(private _userService: UserService,
    private _toast:ToastrService,
    protected _notificationService:NotificationService) {}

  ngOnInit(): void {
    this.language = localStorage.getItem("lang") || "en";
    this._notificationService.ConnectToNotificationHub();
    this.role = this._userService.getFieldFromJWT('http://schemas.microsoft.com/ws/2008/06/identity/claims/role');
    this._userService.getCurrentUserData().subscribe({
      next:(res)=>{
        this.userResponse = res;
        localStorage.setItem("name", res.fullName);
        localStorage.setItem("email", res.email);
        if(this.role=="SuperAdmin"){
          if(res.image==null){
            this.userResponse.image ='user.png';
          }        
        }
      },
      error:(err)=>{
        this._toast.error(err.error.message);
      }
    });
    
    this._notificationService.GetNotificationUser();
  }
  changeLang(){
    localStorage.setItem("lang",this.language);
    const html = document.querySelector('html');
    if (html) {
    if (this.language === 'ar') {
      html.setAttribute('dir', 'rtl');
    } else {
      html.setAttribute('dir', 'ltr');
    }
  }
    window.location.reload();

  }

  readNotification(id:number){
    this._notificationService.ReadNotification(id).subscribe({
      next:(res)=>{
        this._notificationService.GetNotificationUser();
      }
    });
  }
}
