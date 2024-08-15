import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesListRoutingModule } from './employees-list-routing.module';
import { EmployeesListPageComponent } from './employees-list-page/employees-list-page.component';
import { EmployeesListFilterComponent } from './employees-list-filter/employees-list-filter.component';
import { EmployeesListSearchComponent } from './employees-list-search/employees-list-search.component';
import { EmployeesListTableComponent } from './employees-list-table/employees-list-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EmployeesListPageComponent,
    EmployeesListFilterComponent,
    EmployeesListSearchComponent,
    EmployeesListTableComponent
  ],
  imports: [
    CommonModule,
    EmployeesListRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModalModule,
    TranslateModule,
    SweetAlert2Module,
    NgxPaginationModule,
    TranslateModule
  ]
})
export class EmployeesListModule { }
