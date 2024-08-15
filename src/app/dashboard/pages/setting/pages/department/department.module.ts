import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentPageComponent } from './components/department-page/department-page.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentListComponent } from './components/department-list/department-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DepartmentPageComponent,
    DepartmentFormComponent,
    DepartmentListComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    TranslateModule
  ]
})
export class DepartmentModule { }
