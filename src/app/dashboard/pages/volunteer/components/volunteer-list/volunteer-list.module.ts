import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerListRoutingModule } from './volunteer-list-routing.module';
import { VolunteerListPageComponent } from './components/volunteer-list-page/volunteer-list-page.component';
import { VolunteerListSearchComponent } from './components/volunteer-list-search/volunteer-list-search.component';
import { VolunteerListFilterComponent } from './components/volunteer-list-filter/volunteer-list-filter.component';
import { VolunteerListTableComponent } from './components/volunteer-list-table/volunteer-list-table.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    VolunteerListPageComponent,
    VolunteerListSearchComponent,
    VolunteerListFilterComponent,
    VolunteerListTableComponent
  ],
  imports: [
    CommonModule,
    VolunteerListRoutingModule,
    NgxPaginationModule,
    SweetAlert2Module,
    ReactiveFormsModule,
    TranslateModule,
    NgSelectModule,
    NgbModalModule,
  ]
})
export class VolunteerListModule { }
