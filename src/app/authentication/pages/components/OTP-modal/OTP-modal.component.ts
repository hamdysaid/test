import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ForgetPasswordService } from 'src/app/service/forget-password.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-OTP-modal',
  templateUrl: './OTP-modal.component.html',
  styleUrls: ['./OTP-modal.component.css']
})

export class OTPModalComponent implements OnInit {

  email: string;
  showforgetresendcode :boolean = false;
  countdown: number = 5; // countdown in seconds
  isCountdownActive: boolean = false;
  isResendActive: boolean = false;
  formOTP = new FormGroup({
    char1: new FormControl<string | null>(null, [Validators.required]),
    char2: new FormControl<string | null>(null, [Validators.required]),
    char3: new FormControl<string | null>(null, [Validators.required]),
    char4: new FormControl<string | null>(null, [Validators.required]),
    char5: new FormControl<string | null>(null, [Validators.required]),
    char6: new FormControl<string | null>(null, [Validators.required]),
  });
  constructor(
    private activeModalService: NgbActiveModal,
    private _router: Router,
    private _forgetpasswordService: ForgetPasswordService,
    private toast: ToastrService,
    private modalServer: NgbModal,
  ) { }

  ngOnInit() {
    this.formOTP.controls.char1.valueChanges.subscribe({
      next: (value) => {
        if (value && value.length === 6) {
          this.formOTP.controls.char1.setValue(value.slice(0, 1));
          this.formOTP.controls.char2.setValue(value.slice(1, 2));
          this.formOTP.controls.char3.setValue(value.slice(2, 3));
          this.formOTP.controls.char4.setValue(value.slice(3, 4));
          this.formOTP.controls.char5.setValue(value.slice(4, 5));
          this.formOTP.controls.char6.setValue(value.slice(5, 6));
        }
      }
    });
    this.startCountdown();
  }


  sendOTP() {
    let { char1, char2, char3, char4, char5, char6 } = this.formOTP.value;
    this.activeModalService.close(`${char1}${char2}${char3}${char4}${char5}${char6}`);
  }

  emailMask(email?: string) {
    if (!email) return '';
    return email.replace(/^(.)(.*)(.@.*)$/, (_, a, b, c) => a + b.replace(/./g, '*') + c);
  }
  resendResetCode() {
    this._forgetpasswordService.sendEmail(this.email).subscribe({
      next: async () => {
        this.modalServer.dismissAll();
        const modalRef = this.modalServer.open(OTPModalComponent, { size: 'lg' });
        this.startCountdown();
        modalRef.componentInstance.email = this.email;
        modalRef.componentInstance.showforgetresendcode = true;
        const OTP = await modalRef.result;
        this._forgetpasswordService.sendCode(OTP).subscribe({
          next: (res) => {
            console.log(res);
            this._router.navigate(['/auth/identity/resetpassword']);
          },
          error: (err) => {
            console.log(err.message);
            this.toast.error("Wrong OTP code. Please try again.");
          }
        });
      }
    });
  }
  startCountdown() {
    this.isCountdownActive = true;
    this.isResendActive = false;
    this.countdown = 5; // Reset countdown to 60 seconds
    const intervalId = setInterval(() => {
      this.countdown--;
      if (this.countdown === 0) {
        clearInterval(intervalId);
        this.isCountdownActive = false;
        this.isResendActive = true;
      }
    }, 1000);
  }
}
