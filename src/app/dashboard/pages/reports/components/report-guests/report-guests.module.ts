import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportGuestsRoutingModule } from './report-guests-routing.module';
import { ReportGuestsSearchComponent } from './components/report-guests-search/report-guests-search.component';
import { ReportGuestsTableComponent } from './components/report-guests-table/report-guests-table.component';
import { ReportGuestsPageComponent } from './components/report-guests-page/report-guests-page.component';
import { ReportGuestsFilterComponent } from './components/report-guests-filter/report-guests-filter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ReportGuestsSearchComponent,
    ReportGuestsTableComponent,
    ReportGuestsPageComponent,
    ReportGuestsFilterComponent
  ],
  imports: [
    CommonModule,
    ReportGuestsRoutingModule,
    NgxPaginationModule,
    FormsModule,
    TranslateModule,
    NgSelectModule,
    NgbModalModule
  ]
})
export class ReportGuestsModule { }
