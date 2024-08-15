import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable, tap } from 'rxjs';
import { UserResponse } from 'src/app/models/auth';
import { ApiResponse } from 'src/app/models/response';
import { ClaimService } from 'src/app/service/claim.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { claimSD } from 'src/app/utils/role';

@Component({
  selector: 'app-access-page',
  templateUrl: './access-page.component.html',
  styleUrls: ['./access-page.component.css']
})
export class AccessPageComponent implements OnInit {
  getAllEmployee$: Observable<UserResponse[]>;
  getEmplyeeClaim$: Observable<ApiResponse<claimSD>>;

  formEmail: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required]),
  });

  formAccess: FormGroup = new FormGroup({
    CreateAgenda: new FormControl(false, [Validators.required]),
    UpdateAgenda: new FormControl(false, [Validators.required]),
    DeleteAgenda: new FormControl(false, [Validators.required]),
    CreateEvent: new FormControl(false, [Validators.required]),
    UpdateEvent: new FormControl(false, [Validators.required]),
    DeleteEvent: new FormControl(false, [Validators.required]),
    CreateReport: new FormControl(false, [Validators.required]),
    CreateCertificate: new FormControl(false, [Validators.required]),
    CreateInvitation: new FormControl(false, [Validators.required]),
    UpdateInvitation: new FormControl(false, [Validators.required]),
    DeleteInvitation: new FormControl(false, [Validators.required]),
    AddGuest: new FormControl(false, [Validators.required]),
    Vacation: new FormControl(false, [Validators.required]),
    ReportVolunteer: new FormControl(false, [Validators.required]),
    ReportEvent: new FormControl(false, [Validators.required]),
    ReportAgenda: new FormControl(false, [Validators.required]),
    ReportEmployee: new FormControl(false, [Validators.required]),
    ReportGuest: new FormControl(false, [Validators.required]),
  });
  showForm = false;
  language:string;
  constructor(
    private formBuilder: FormBuilder,
    private _toastr: ToastrService,
    private _employeeService: EmployeeService, private _claimService: ClaimService) { 
      this.language = localStorage.getItem("lang") || "en";
    }

  ngOnInit(): void {
    this.getAllEmployee$ = this._employeeService.getAllEmployee();
  }

  getSelectedEmplyeeClaims() {
    this.getEmplyeeClaim$ = this._claimService.getEmployeeClaims(this.formEmail.value.email).pipe(tap(
      {
        next: (res) => {
          this.formAccess = this.formBuilder.group({});
          for (let [key, value] of Object.entries(res.response)) {
            const control = new FormControl(value);
            this.formAccess.addControl(key, control);
          }
        }
      }
    ));
    this.showForm = true;
  }

  sendAccess() {
    // console.log(this.formAccess.value);
    let claims: string[] = [];
    let claimSD = this.formAccess.value as claimSD;

    for (let [key, value] of Object.entries(claimSD)) {
      if (value)
        claims.push(key);
    }

    this._claimService.sendClaims(this.formEmail.value.email, claims).subscribe({
      next: (res) => {
        //console.log(res);
        this._toastr.success("Success");
        this.formAccess.reset();
        this.formEmail.reset();
        this.showForm = false;
      },
      error: ({error}) => {
        this._toastr.error(Object.entries(error.errors).map(([key, value]) => (<string[]>value).join(' ')).join('\n'));
      }
    });
  }

  // patchCntrlValue(key: string, value: boolean) {
  //   this.formAccess.patchValue({
  //     key: value
  //   });
  //// console.log(this.formAccess.value);
  // }

  get hasSelect() {
    for (let control in this.formAccess.controls) {
      if (this.formAccess.controls[control].value)
        return true;
    }
    return false;
  }

  selectAll() {
    if (this.hasSelect)
      this.formAccess.reset()
    else
      for (let control in this.formAccess.controls) {
        this.formAccess.controls[control].setValue(true);
      }
  }
}
