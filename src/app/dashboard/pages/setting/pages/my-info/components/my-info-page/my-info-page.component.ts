import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { UserResponse } from 'src/app/models/auth';
import { Department } from 'src/app/models/department';
import { Principalitie } from 'src/app/models/principalitie';
import { DetailService } from 'src/app/service/detail.service';
import { UserService } from 'src/app/service/user.service';
import { ValiationMethodes } from 'src/app/utils/validation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-info-page',
  templateUrl: './my-info-page.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css', './my-info-page.component.css']
})
export class MyInfoPageComponent implements OnInit {
  language:string;
  imgPath = environment.imageEndPoint;
  img = '/assets/images/uploadImage.svg';
  updateForm: FormGroup;
  validation: ValiationMethodes;
  principalities: Principalitie[] = [];
  departments: Department[] = [];
  constructor(
    private router: Router,
    private _userService: UserService,
    private _detailService: DetailService,
    private _toastr: ToastrService
  ) {
    this.language = localStorage.getItem("lang") || "en";
   }

  ngOnInit(): void {
    this._detailService.DataForUserRegister().subscribe({
      next: (res) => {
        //console.log(res);
        this.principalities = res.response.principalities;
        this.departments = res.response.departments;
      }
    });
    this.updateForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      fullName: new FormControl('', [Validators.required]),
      fullNameAR: new FormControl('empty', [Validators.required]),
      principalityId: new FormControl(0, [Validators.required]),
      internationalId: new FormControl('', [Validators.required]),
      image: new FormControl(''),
      imageFile: new FormControl(null),
      departmentId: new FormControl(0, [Validators.required]),
      employeeNumber: new FormControl(''),
      startWorkTime: new FormControl('', [Validators.required]),
      endWorkTime: new FormControl('', [Validators.required]),
    });

    this.validation = new ValiationMethodes(this.updateForm);

    this._userService.getCurrentUserData().subscribe({
      next: (res) => {
        if (res.image) this.img = this.imgPath.normal + res.image;
        this.updateForm.patchValue({
          email: res.email,
          phoneNumber: res.phoneNumber,
          fullName: res.fullName,
          principalityId: res.principalityId,
          internationalId: res.internationalId,
          image: res.image,
          departmentId: res.departmentId,
          employeeNumber: res.employeeNumber,
        });
        if (res.startWorkTime) this.updateForm.get('startWorkTime')?.setValue(res.startWorkTime.replace(':00', ''));
        if (res.endWorkTime) this.updateForm.get('endWorkTime')?.setValue(res.endWorkTime.replace(':00', ''));

      },
      error: (err) => {
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });

    this.updateForm.valueChanges.subscribe(v=>{
      // console.log(this.updateForm.value);
      
    })
  }

  submit() {
    this.updateForm.value.fullNameAR = this.updateForm.value.fullName;
    this.updateForm.value.startWorkTime += ':00';
    this.updateForm.value.endWorkTime += ':00';
    // console.log(this.updateForm.value);
    this._userService.updateEmployee(this.updateForm.value).subscribe({
      next: (res) => {
        this._toastr.success("تم تعديل البيانات بنجاح");
      },
      error: (err) => {
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }


  onFileChange(imgInput: HTMLInputElement) {
    const files = imgInput.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (img) => {
        if (typeof reader.result === 'string') this.img = reader.result;
      };
      this.updateForm.get('imageFile')?.setValue(file);
    }
  }
}
