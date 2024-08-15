import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { forkJoin } from 'rxjs';
import { VacationType } from 'src/app/models/vacation-type';
import { DetailService } from 'src/app/service/detail.service';
import { EmployeeService } from 'src/app/service/employee.service';
import { UserService } from 'src/app/service/user.service';
import { VacationTypeService } from 'src/app/service/vacation-type.service';
import { VacationService } from 'src/app/service/vacation.service';

@Component({
  selector: 'app-create-vacation-modal',
  templateUrl: './create-vacation-modal.component.html',
  styleUrls: ['./create-vacation-modal.component.css']
})
export class CreateVacationModalComponent implements OnInit {
  vacationTypes: VacationType[] = [];
  language: string;
  form = new FormGroup({
    EmployeeUserId: new FormControl<string | null>(null, [Validators.required]),
    VacationTypeId: new FormControl<string | null>(null, [Validators.required]),
    StartDate: new FormControl<string | null>(null, [Validators.required]),
    EndDate: new FormControl<string | null>(null, [Validators.required]),
    Note: new FormControl<string>('', [Validators.required]),
  });

  constructor(
    private _toastr: ToastrService,
    protected _userService: UserService,
    private vacationService: VacationService,
    protected activeModal: NgbActiveModal,
    private vacationTypeService: VacationTypeService,
    protected translateService: TranslateService
  ) {
    this.language = localStorage.getItem("lang") || "en";
  }

  ngOnInit(): void {
    forkJoin([
      this._userService.getCurrentUserData(),
      this.vacationTypeService.GetAll()
    ]).subscribe({
      next: ([currentUser, vacationTypes]) => {
        this.form.controls.EmployeeUserId.setValue(currentUser.id);
        this.vacationTypes = vacationTypes.response.data;
      }
    })
  }

  submit() {
    const fromData = new FormData();
    if (this.form.value.EmployeeUserId)
      fromData.append('EmployeeUserId', this.form.value.EmployeeUserId);
    if (this.form.value.VacationTypeId)
      fromData.append('VacationTypeId', this.form.value.VacationTypeId);
    if (this.form.value.StartDate)
      fromData.append('StartDate', this.form.value.StartDate);
    if (this.form.value.EndDate)
      fromData.append('EndDate', this.form.value.EndDate);
    if (this.form.value.Note)
      fromData.append('Note', this.form.value.Note);

    this.vacationService.Create(fromData as any).subscribe({
      next: () => {
        this.activeModal.close();
        if (this.language == "ar")
          this._toastr.success("تم إنشاء طلب الاجازة بنجاح");
        else
        this._toastr.success("Vacation Request added Successfuly");
      },
      error: ({ error }) => {
        if (error.errors == undefined) {
          this._toastr.error(error.message);
        }
        else {
          this._toastr.error(Object.entries(error.errors).map(([key, value]) => (<string[]>value).join(' ')).join('\n'));
        }
      }
    });
  }
}
