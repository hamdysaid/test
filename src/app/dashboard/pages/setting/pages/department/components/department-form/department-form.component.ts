import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/service/department.service';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css', './department-form.component.css']
})
export class DepartmentFormComponent implements OnInit {
  form: FormGroup;
  validation: ValiationMethodes;
  constructor(private _departmentService: DepartmentService,
    private _toastr: ToastrService) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      nameAR: new FormControl('', Validators.required),
      color: new FormControl('#ffffff', Validators.required),
    });
    this.validation = new ValiationMethodes(this.form);
  }

  submit() {
    this.form.value.color = this.form.value.color.replace('#', "");
    // console.log(typeof (this.form.value.color));
    this._departmentService.Create(this.form.value).subscribe({
      next: (res) => {
        this._toastr.success(res.message);
        this.form.reset({color: '#ffffff'});
// console.log(res.response);
        this._departmentService.entities.push(res.response);
      },
      error: (err) => {
        this._toastr.error(err.error.message);
// console.log(err);
      }
    });
  }
}
