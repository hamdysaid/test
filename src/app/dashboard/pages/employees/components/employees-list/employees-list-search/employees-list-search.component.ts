import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { EmployeeService } from 'src/app/service/employee.service';
import { StateMachineService } from 'src/app/service/state-machine.service';

@Component({
  selector: 'app-employees-list-search',
  templateUrl: './employees-list-search.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
    './employees-list-search.component.css']
})
export class EmployeesListSearchComponent implements OnInit {

  form = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });
  constructor(protected _stateMachineService: StateMachineService, protected _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.form.controls.search.valueChanges.pipe(debounceTime(250)).subscribe((value) => this.submit());
  }


  submit() {
    let { search } = this.form.value;
    console.log(search);

    if (search) {
      this._employeeService.searchForEmployee.search = search.trim();
    } else {
      this._employeeService.searchForEmployee.search = null;
    }
    this._employeeService.getPage(this._employeeService.searchForEmployee.page ?? 1, this._employeeService.searchForEmployee);
  }
}
