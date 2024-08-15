import { Component, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { Status } from 'src/app/models/status';
import { EmployeeStatusService } from 'src/app/service/employee-status.service';
import { PopupService } from 'src/app/service/popup.service';

@Component({
  selector: 'app-list-status-employees',
  templateUrl: './list-status-employees.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./list-status-employees.component.css']
})
export class ListStatusEmployeesComponent {
  @Input() EmployeeStatus: Status;
  form:FormGroup =new FormGroup({
    id: new FormControl(0, [Validators.required]),
    name:new FormControl('', [Validators.required]),
    nameAR:new FormControl('', [Validators.required]),
    color:new FormControl('#000000', [Validators.required]),
  });
  constructor(private _employeeStatus:EmployeeStatusService,
              private _toastr:ToastrService,
              protected _popup:PopupService<Employee>){}

  
  delete(){
    this._employeeStatus.DeleteById(this.EmployeeStatus.id).subscribe({
      next:(res)=>{
        this._toastr.success(res.message);
        this._employeeStatus.entities.splice(this._employeeStatus.entities.findIndex(s=> s.id == this.EmployeeStatus.id),1);
      },
      error:(err)=>{
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }
  click(id: number) {
    this.form.value.color = this.form.value.color.replace('#',""); 
    this._employeeStatus.GetByIdAll(id).pipe(
      tap({
        next:(res)=>{
          this.form.patchValue({
              id : res.response.id,
              name : res.response.name,
              nameAR : res.response.nameAR,
              color: '#'+res.response.color
          });
        }
      })
    ).subscribe({
      next:(res)=>{
        this._popup.setData(res.response);
        this._popup.setForm(this.form);
      }
    });
    }
}
