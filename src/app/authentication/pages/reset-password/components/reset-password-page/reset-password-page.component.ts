import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForgetPasswordService } from 'src/app/service/forget-password.service';
import { UserService } from 'src/app/service/user.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['../../../forget-password/components/forget-password-page/forget-password-page.component.css', './reset-password-page.component.css']
})
export class ResetPasswordPageComponent {
  constructor(
    private _forgetPassword: ForgetPasswordService,
    private router: Router,
    private _toastr: ToastrService
  ) { }

  form: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  submit() {
    let { password, confirmPassword } = this.form.value;
    if (password.trim() != confirmPassword.trim()) {
      this._toastr.error("Please Confirm ur Password");
      return;
    }
    this._forgetPassword.sendPassword(password.trim()).subscribe({
      next: (res) => {
        //console.log(res);
        this.router.navigate(['/']);
      }
    });
  }
}