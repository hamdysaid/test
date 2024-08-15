import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeesSearchComponent } from './components/employees-search/employees-search.component';
import { EmployeesFilterComponent } from './components/employees-filter/employees-filter.component';
import { EmployeesPageComponent } from './components/employees-page/employees-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EmployeesTableComponent,
    EmployeesSearchComponent,
    EmployeesFilterComponent,
    EmployeesPageComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class EmployeesModule { }
