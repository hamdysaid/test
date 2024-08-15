import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/service/department.service';
import { PopupService } from 'src/app/service/popup.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./department-list.component.css']
})
export class DepartmentListComponent {
  @Input() department:Department;
  form:FormGroup = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    name : new FormControl('',[Validators.required]),
    nameAR : new FormControl('',[Validators.required]),
    color:new FormControl('',[Validators.required])
  })  
constructor(
  protected _popup:PopupService<Department>,
  private _departmentService:DepartmentService,
  private _toastr:ToastrService) {}

  delete(){
    this._departmentService.DeleteById(this.department.id).subscribe({
      next:(res)=>{
        let index = this._departmentService.entities.findIndex(x=> x.id ==this.department.id);
        this._departmentService.entities.splice(index,1);

      },
      error:(err)=>{
        this._toastr.error(err.error.message);
      }
    });
  }

  click(id: number) {
    this.form.value.color = this.form.value.color.replace('#',""); 
    this._departmentService.GetByIdAll(id).pipe(
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
