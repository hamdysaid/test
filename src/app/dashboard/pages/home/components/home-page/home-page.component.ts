import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ChartsForUserNumbers } from 'src/app/models/detail';
import { EmployeeChart } from 'src/app/models/employee';
import { DetailService } from 'src/app/service/detail.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { UserService } from 'src/app/service/user.service';
import { RoleSD } from 'src/app/utils/role';
import { CreateVacationModalComponent } from '../create-vacation-modal/create-vacation-modal.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  chartsForUserNumbers: ChartsForUserNumbers = {
    volunteer: 0,
    employee: 0,
    agenda: 0,
    event: 0
  };
  chartEmployee: EmployeeChart = {
    absence: 0,
    annual: 0,
    attended: 0,
    sick: 0
  };
  constructor(
    private _toastr: ToastrService,
    private _employeeService: EmployeeService,
    private _detailService: DetailService,
    protected _userService: UserService,
    private modal: NgbModal
  ) { }
  roles = RoleSD.superAdmin;
  ngOnInit(): void {
    this._employeeService.getchartEmployee(localStorage.getItem("email")!).subscribe({
      next: (res) => {
        this.chartEmployee = res;
      },
      error: (err) => {
      }
    });
    this._detailService.ChartsForUserNumbers().subscribe({
      next: (res) => {
        //console.log(res);
        this.chartsForUserNumbers = res.response;
      },
      error: (err) => {
        this._toastr.error(err.error.message);
      }
    });
  }
  openCreateVacationModal() {
    this.modal.open(CreateVacationModalComponent, { size: 'lg' });
  }
}
