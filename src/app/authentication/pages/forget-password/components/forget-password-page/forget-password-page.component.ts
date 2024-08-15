import { Component, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { ForgetPasswordService } from 'src/app/service/forget-password.service';
import { ValiationMethodes } from 'src/app/utils/validation';
import { OTPModalComponent } from '../../../components/OTP-modal/OTP-modal.component';

@Component({
  selector: 'app-forget-password-page',
  templateUrl: './forget-password-page.component.html',
  styleUrls: ['./forget-password-page.component.css']
})
export class ForgetPasswordPageComponent {
  form: FormGroup;
  validation: ValiationMethodes;
  isResendActive:boolean=false;
  constructor(
    private _forgetpasswordService: ForgetPasswordService,
    private _router: Router,
    private modalServer: NgbModal,
    private toast: ToastrService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
    this.validation = new ValiationMethodes(this.form);
  }

  async submit() {
    this._forgetpasswordService.sendEmail(this.form.value.email).subscribe({
       next: async () => {
        const modalRef = this.modalServer.open(OTPModalComponent, { size: 'lg' });
        modalRef.componentInstance.email = this.form.value.email;
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
  

}


