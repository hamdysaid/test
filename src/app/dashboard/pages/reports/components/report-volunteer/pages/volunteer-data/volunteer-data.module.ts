import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerDataRoutingModule } from './volunteer-data-routing.module';
import { VolunteerDataTableComponent } from './components/volunteer-data-table/volunteer-data-table.component';
import { VolunteerDataPageComponent } from './components/volunteer-data-page/volunteer-data-page.component';
import { VolunteerDataFilterComponent } from './components/volunteer-data-filter/volunteer-data-filter.component';
import { VolunteerDataSearchComponent } from './components/volunteer-data-search/volunteer-data-search.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    VolunteerDataTableComponent,
    VolunteerDataPageComponent,
    VolunteerDataFilterComponent,
    VolunteerDataSearchComponent
  ],
  imports: [
    CommonModule,
    VolunteerDataRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class VolunteerDataModule { }
