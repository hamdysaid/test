import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { read } from '@popperjs/core';
import { el, tr } from 'date-fns/locale';
import { ToastrService } from 'ngx-toastr';
import { EmployeeRegister } from 'src/app/models/auth';
import { Department } from 'src/app/models/department';
import { Principalitie } from 'src/app/models/principalitie';
import { DetailService } from 'src/app/service/detail.service';
import { UserService } from 'src/app/service/user.service';
import { ValiationMethodes } from 'src/app/utils/validation';
import * as moment from 'moment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OTPModalComponent } from '../../../components/OTP-modal/OTP-modal.component';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: [
    '../../../forget-password/components/forget-password-page/forget-password-page.component.css',
    './register-page.component.css',
  ],
})
export class RegisterPageComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl('', { nonNullable: false, validators: [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')] }),
    password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#!])[A-Za-z0-9@#!]{8,}$')]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{8,11}$')]),
    fullName: new FormControl('', [Validators.required]),
    // fullNameAR: new FormControl('empty', [Validators.required]),
    principalityId: new FormControl(null, [Validators.required]),
    internationalId: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}-[0-9]{4}-[0-9]{7}-[0-9]{1}$')]),
    // image: new FormControl('', [Validators.required]),
    // imageFile: new FormControl<File | null>(null, [Validators.required]),
    departmentId: new FormControl(null, [Validators.required]),
    employeeNumber: new FormControl(''),
    startWorkTime: new FormControl('', [Validators.required]),
    endWorkTime: new FormControl('', [Validators.required]),
  });

  // img = '../../../../../../assets/images/uploadImage.svg';
  loading: boolean = false;
  validation: ValiationMethodes;
  principalities: Principalitie[] = [];
  departments: Department[] = [];
  email: string = "";

  constructor(
    private router: Router,
    private _userService: UserService,
    private _detailService: DetailService,
    private _toastr: ToastrService,
    private modalServer: NgbModal
  ) { }

  ngOnInit(): void {
    this._detailService.DataForUserRegister().subscribe({
      next: (res) => {
        this.principalities = res.response.principalities;
        this.departments = res.response.departments;
      }
    });
    this.validation = new ValiationMethodes(this.registerForm);
  }

  submit() {
    this.loading = true;
    // this.loading = true;
    // setTimeout(() => {
    //   this.loading = false;
    //   this.registerForm.reset();
    // }, 2000);
    if (this.registerForm.value.principalityId == null || this.registerForm.value.departmentId == null)
      return;

    // this.registerForm.value.employeeNumber = this.registerForm.value.internationalId;

    if (!moment(this.registerForm.value.startWorkTime, 'HH:mm:ss', true).isValid()) this.registerForm.value.startWorkTime += ':00';
    if (!moment(this.registerForm.value.endWorkTime, 'HH:mm:ss', true).isValid()) this.registerForm.value.endWorkTime += ':00';
    this.email=this.registerForm.value.email!;
    this._userService.registerEmployee(this.registerForm.value as any).subscribe({
      next: async (res) => {
        //console.log(res);
        this.router.navigate(['/']);
        this.registerForm.reset();
        this.loading = false;
        this._toastr.success(res.message);
  
        const modalRef = this.modalServer.open(OTPModalComponent, { size: 'lg' });
        modalRef.componentInstance.email = this.registerForm.value.email;
        const OTP = await modalRef.result;
        this._userService.otpConfirm({
          email: this.email,
          code: OTP
        }).subscribe({
          next: (res) => {
            this._toastr.success("You email has been confirmed. You can login again.");
          },
          error: (err) => {
            console.log(err.message);
            this._toastr.error("Wrong OTP code. Please try again.");
          }
        });
      },
      error: (err) => {
        this._toastr.error(err.error.message);
        this.loading = false;
      }
    });
  }

  // onFileChange(event: Event) {
  //   const target = event.target as HTMLInputElement;
  //   const files = target.files!;
  //   if (files.length > 0) {
  //     const file = files[0];
  //  // console.log(file);
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.img = reader.result as string;
  //     };
  //     this.registerForm.controls.imageFile.setValue(file);
  //   }
  // }

  changeEye() {
    const password: HTMLInputElement = document.getElementById("password") as HTMLInputElement;
    const imgPassword: HTMLInputElement = document.getElementById("img-password") as HTMLInputElement;
    if (password?.type == 'password') {
      password.type = 'text';
      imgPassword.style.opacity = '.5';
    } else {
      password.type = 'password';
      imgPassword.style.opacity = '1';
    }
  }

  passValidation(type: 'length' | 'number' | 'uppercase' | 'lowercase' | 'special', password: string | null) {
    if (!password) return false;
    switch (type) {
      case 'length':
        return password.length >= 8;
      case 'number':
        return /[0-9]/.test(password);
      case 'uppercase':
        return /[A-Z]/.test(password);
      case 'lowercase':
        return /[a-z]/.test(password);
      case 'special':
        return /[@#!]+/.test(password);
      default:
        return false;
    }
  }
}
