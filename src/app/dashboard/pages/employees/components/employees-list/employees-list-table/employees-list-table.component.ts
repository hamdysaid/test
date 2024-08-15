import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/service/employee.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-employees-list-table',
  templateUrl: './employees-list-table.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
  './employees-list-table.component.css']
})
export class EmployeesListTableComponent implements OnInit{
imagePath = environment.imageEndPoint;
language:string;
  constructor(protected _employeeService:EmployeeService, private _toastr: ToastrService) {
    this.language = localStorage.getItem("lang") || "en";
  }
  ngOnInit(): void {
    this._employeeService.getPage(1);
  }

  changeActivation(email:string){
    // console.log(email);
    this._employeeService.changeActive(email).subscribe({
      next:(res)=>{
    this._employeeService.getPage(this._employeeService.searchForEmployee.page??1);
    //console.log(res);
      },
      error:(err)=>{
        // console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }
  
  deleteUser(email:string){
    // console.log(email);
    this._employeeService.deleteUser(email).subscribe({
      next:(res)=>{
    this._employeeService.getPage(this._employeeService.searchForEmployee.page??1, this._employeeService.searchForEmployee);
    //console.log(res);
  },
      error:(err)=>{
        // console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }
}
