import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesViewRoutingModule } from './employees-view-routing.module';
import { EmployeesViewBoxsComponent } from './employees-view-boxs/employees-view-boxs.component';
import { EmployeesViewUserComponent } from './employees-view-user/employees-view-user.component';
import { EmployeesViewAccessComponent } from './employees-view-access/employees-view-access.component';
import { EmployeesViewVolunteerComponent } from './employees-view-volunteer/employees-view-volunteer.component';
import { EmployeesViewAgendaComponent } from './employees-view-agenda/employees-view-agenda.component';
import { EmployeesViewEventComponent } from './employees-view-event/employees-view-event.component';
import { EmployeesViewPageComponent } from './employees-view-page/employees-view-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EmployeesViewBoxsComponent,
    EmployeesViewUserComponent,
    EmployeesViewAccessComponent,
    EmployeesViewVolunteerComponent,
    EmployeesViewAgendaComponent,
    EmployeesViewEventComponent,
    EmployeesViewPageComponent
  ],
  imports: [
    CommonModule,
    EmployeesViewRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class EmployeesViewModule { }
