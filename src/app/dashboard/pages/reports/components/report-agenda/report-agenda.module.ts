import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportAgendaRoutingModule } from './report-agenda-routing.module';
import { ReportAgendaPageComponent } from './components/report-agenda-page/report-agenda-page.component';
import { ReportAgendaSearchComponent } from './components/report-agenda-search/report-agenda-search.component';
import { ReportAgendaFilterComponent } from './components/report-agenda-filter/report-agenda-filter.component';
import { ReportAgendaTableComponent } from './components/report-agenda-table/report-agenda-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ReportAgendaPageComponent,
    ReportAgendaSearchComponent,
    ReportAgendaFilterComponent,
    ReportAgendaTableComponent
  ],
  imports: [
    CommonModule,
    ReportAgendaRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    TranslateModule
  ]
})
export class ReportAgendaModule { }
