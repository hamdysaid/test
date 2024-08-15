import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';
import { ValiationMethodes } from 'src/app/utils/validation';
import { OTPModalComponent } from '../../../components/OTP-modal/OTP-modal.component';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [
    '../../../forget-password/components/forget-password-page/forget-password-page.component.css',
    './login-page.component.css',
  ],
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  validation: ValiationMethodes;
  loading: boolean = false;
  constructor(
    private router: Router,
    private _userService: UserService,
    private _toastr: ToastrService,
    private _activate: ActivatedRoute,
    private modalServer: NgbModal,
  ) { }

  ngOnInit(): void {
    const q = this._activate.snapshot.queryParams;
    if (this._userService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
      //this._toastr.success('Already Loged In');
    }
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.validation = new ValiationMethodes(this.loginForm);
  }

  submit() {

    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.loginForm.reset();
    }, 2000);

    this._userService.loginUser(this.loginForm.value).subscribe({
      next: (res) => {
        //console.log(res);
        this._userService.saveToken(res);
        this.loginForm.reset();
        const q = this._activate.snapshot.queryParams;
        //this._toastr.success(res.message);
        if (q["url"])
          this.router.navigate([decodeURIComponent(q["url"])]);
        else
          this.router.navigate(['/dashboard']);
      },
      error: async ({ error }: any) => {
        if (error?.isEmailConfirmed === false) {
          this._toastr.error('Please confirm your email');
          const modalRef = this.modalServer.open(OTPModalComponent, { size: 'lg' });
          modalRef.componentInstance.email = this.loginForm.value.email;
          const OTP = await modalRef.result;
          this._userService.otpConfirm({
            email: modalRef.componentInstance.email,
            code: OTP
          }).subscribe({
            next: (res) => {
              this._toastr.success("You email has been confirmed. You can login agin.");
            },
            error: (err) => {
              console.log(err.message);
              this._toastr.error("Wrong OTP code. Please try again.");
            }
          });
        } else {
          if (error.message) {
            this._toastr.error(error.message);
            // if (error.needActivation) {
            //   this.router.navigate(['/activate']);
            // }
          } else {
            if (error?.errors) this._toastr.error(Object.entries(error.errors).map(([key, value]) => (<string[]>value).join(' ')).join('\n'));
          }
        }

      }
    });
  }

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
}
