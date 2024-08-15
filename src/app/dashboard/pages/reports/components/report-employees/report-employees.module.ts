import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportEmployeesRoutingModule } from './report-employees-routing.module';
import { ReportEmployeesPageComponent } from './components/report-employees-page/report-employees-page.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ReportEmployeesPageComponent
  ],
  imports: [
    CommonModule,
    ReportEmployeesRoutingModule,
    TranslateModule
  ]
})
export class ReportEmployeesModule { }
