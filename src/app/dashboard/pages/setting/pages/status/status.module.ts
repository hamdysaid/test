import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusPageComponent } from './components/status-page/status-page.component';
import { FormStatusVolunteerComponent } from './components/form-status-volunteer/form-status-volunteer.component';
import { ListStatusVolunteerComponent } from './components/list-status-volunteer/list-status-volunteer.component';
import { ListStatusGuestsComponent } from './components/list-status-guests/list-status-guests.component';
import { FormStatusGuestsComponent } from './components/form-status-guests/form-status-guests.component';
import { FormStatusEventComponent } from './components/form-status-event/form-status-event.component';
import { ListStatusEventComponent } from './components/list-status-event/list-status-event.component';
import { ListStatusEmployeesComponent } from './components/list-status-employees/list-status-employees.component';
import { FormStatusEmployeesComponent } from './components/form-status-employees/form-status-employees.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    StatusPageComponent,
    FormStatusVolunteerComponent,
    ListStatusVolunteerComponent,
    ListStatusGuestsComponent,
    FormStatusGuestsComponent,
    FormStatusEventComponent,
    ListStatusEventComponent,
    ListStatusEmployeesComponent,
    FormStatusEmployeesComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StatusRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    TranslateModule
  ]
})
export class StatusModule { }
