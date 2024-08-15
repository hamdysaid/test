import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportEventRoutingModule } from './report-event-routing.module';
import { ReportEventTableComponent } from './components/report-event-table/report-event-table.component';
import { ReportEventPageComponent } from './components/report-event-page/report-event-page.component';
import { ReportEventFilterComponent } from './components/report-event-filter/report-event-filter.component';
import { ReportEventSearchComponent } from './components/report-event-search/report-event-search.component';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ReportEventTableComponent,
    ReportEventPageComponent,
    ReportEventFilterComponent,
    ReportEventSearchComponent
  ],
  imports: [
    CommonModule,
    ReportEventRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ]
})
export class ReportEventModule { }
