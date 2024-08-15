import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Department } from 'src/app/models/department';
import { DepartmentService } from 'src/app/service/department.service';
import { PopupService } from 'src/app/service/popup.service';

@Component({
  selector: 'app-department-page',
  templateUrl: './department-page.component.html',
  styleUrls: ['../../../access/components/access-page/access-page.component.css','./department-page.component.css']
})
export class DepartmentPageComponent implements OnInit{
  constructor(protected _popup:PopupService<Department>,protected _departmentService: DepartmentService, private _toastr:ToastrService) {}
  ngOnInit(): void {
    this._departmentService.Get().subscribe({
      next:(res)=>{
        this._departmentService.entities = res.response.data;
      },
      error:(err)=>{
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }

  submit(){
    let result:Department = this._popup.getForm().value;
    // console.log(result);
    result.color = result.color.replace('#','');
    // console.log(result);
    this._departmentService.Update(result).subscribe({
      next:(res)=>{
        this._departmentService.entities[this._departmentService.entities.findIndex(x=> x.id == result.id)] = res.response;
        this._toastr.success(res.message);
      },
      error:(err)=>{
        this._toastr.error(err.error.message);
      }
    });
    }
}
