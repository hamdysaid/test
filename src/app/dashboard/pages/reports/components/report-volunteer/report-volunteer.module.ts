import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportVolunteerRoutingModule } from './report-volunteer-routing.module';
import { ReportVolunteerHomeComponent } from './components/report-volunteer-home/report-volunteer-home.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ReportVolunteerHomeComponent
  ],
  imports: [
    CommonModule,
    ReportVolunteerRoutingModule,
    TranslateModule
  ]
})
export class ReportVolunteerModule { }
