import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-password-page',
  templateUrl: './password-page.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css', './password-page.component.css']
})
export class PasswordPageComponent implements OnInit {
  form: FormGroup;
  validation: ValiationMethodes;
  constructor(private _userService: UserService, private _toastr: ToastrService) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      currentPassword: new FormControl('', [Validators.required]),
      newPassword: new FormControl('', [Validators.required]),
      newPassword2: new FormControl('', [Validators.required]),
    });
    this.validation = new ValiationMethodes(this.form);
  }

  commonEye(password: HTMLInputElement, imgPassword: HTMLImageElement) {
    if (password?.type == 'password') {
      password.type = 'text';
      imgPassword.style.opacity = '.5';
    } else {
      password.type = 'password';
      imgPassword.style.opacity = '1';
    }
  }
  changeEye() {
    const passwordShow = document.getElementById('currentPassword') as HTMLInputElement;
    const imgPassword = document.getElementById("img-currentPassword") as HTMLImageElement;
    this.commonEye(passwordShow, imgPassword);
  }

  changeEyeNewPassword() {
    const passwordShow: HTMLInputElement = document.getElementById('newPassword') as HTMLInputElement;
    const imgPassword = document.getElementById("img-currentPassword") as HTMLImageElement;
    this.commonEye(passwordShow, imgPassword);
  }

  changeEyeConfirmNewPassword() {
    const passwordShow: HTMLInputElement = document.getElementById('confirmNewPassword') as HTMLInputElement;
    const imgPassword = document.getElementById("img-currentPassword") as HTMLImageElement;
    this.commonEye(passwordShow, imgPassword);
  }

  submit() {
    if (this.form.value.newPassword != this.form.value.newPassword2) {
      this._toastr.error("Not Match Password");
      return;
    }
    this._userService.changePassword({
      currentPassword: this.form.value.currentPassword,
      newPassword: this.form.value.newPassword
    }).subscribe({
      next: (res) => {
        this.form.reset();
        this._toastr.success("Updated Password.");
      },
      error: (err) => {
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }
}
