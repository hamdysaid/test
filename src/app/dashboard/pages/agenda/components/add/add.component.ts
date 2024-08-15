import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { UserResponse } from 'src/app/models/auth';
import { AgendaStatusService } from 'src/app/service/agenda-status.service';
import { AgendaService } from 'src/app/service/agenda.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { StateMachineService } from 'src/app/service/state-machine.service';
import { UserService } from 'src/app/service/user.service';
import { RoleSD } from 'src/app/utils/role';
import { ValiationMethodes } from 'src/app/utils/validation';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css', './add.component.css']
})
export class AddComponent implements OnInit {
  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    nameAR: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    descriptionAR: new FormControl('', Validators.required),
    startHour: new FormControl('', Validators.required),
    endHour: new FormControl('', Validators.required),
    dateTimeEnd: new FormControl('', Validators.required),
    dateTimeStart: new FormControl('', Validators.required),
    emplyeeEmailsAsString: new FormControl('', Validators.required),
    leaderId: new FormControl('', Validators.required),
    statusId: new FormControl('', Validators.required),
  });;
  validation: ValiationMethodes;
  role = "";
  constructor(
    private _userService: UserService,
    private _stateMachine: StateMachineService,
    protected _agendaStatusService: AgendaStatusService,
    private _agendaService: AgendaService,
    private _toastr: ToastrService,
    protected _employeeService: EmployeeService) { }

  employeeResponse: UserResponse[] = [];

  ngOnInit(): void {
    this._employeeService.getAllEmployee().subscribe({
      next: (res) => {
        this.employeeResponse = res;
      }
    });

    this._agendaStatusService.Get().subscribe({
      next: (res) => {
        this._agendaStatusService.entities = res.response.data;
      }
    });

    this.role = this._userService.getFieldFromJWT('http://schemas.microsoft.com/ws/2008/06/identity/claims/role');
    // console.log(this.role);
    this.validation = new ValiationMethodes(this.form);
    if (this.role == RoleSD.employee) {
      this._userService.getCurrentUserData().pipe(
        tap({
          next: (res) => {
            this.form.patchValue({
              leaderId: res.id
            });
          }
        })
      ).subscribe({
        next: (res) => {

        },
        error: ({ error }) => {
          if (error?.message) {
            this._toastr.error(error.message);
          } else {
            this._toastr.error(Object.entries(error.errors).map(([key, value]) => (<string[]>value).join(' ')).join('\n'));
          }
        }
      });

    }

  }

  submit() {
    this.form.value.emplyeeEmailsAsString = this.form.value.emplyeeEmailsAsString.toString();

    if (!moment(this.form.value.startHour, 'HH:mm:ss', true).isValid()) this.form.value.startHour += ":00";
    if (!moment(this.form.value.startHour, 'HH:mm:ss', true).isValid()) this.form.value.startHour += ":00";

    // console.log(this.form.value);
    this._agendaService.Create(this.form.value).subscribe({
      next: (res) => {
        this._toastr.success(res.message);
        this.form.reset();
        // console.log(res.response);
        this._agendaService.entities.push(res.response);
        this._stateMachine.ShowVolunteerFilterSeach();
      },
      error: ({ error }) => {
        if (error?.message) {
          this._toastr.error(error.message);
        } else {
          this._toastr.error(Object.entries(error.errors).map(([key, value]) => (<string[]>value).join(' ')).join('\n'));
        }
      }
    });
  }
}
