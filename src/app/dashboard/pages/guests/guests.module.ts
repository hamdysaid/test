import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestsRoutingModule } from './guests-routing.module';
import { GuestsPageComponent } from './components/guests-page/guests-page.component';
import { GuestsSearchComponent } from './components/guests-search/guests-search.component';
import { GuestsTableComponent } from './components/guests-table/guests-table.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    GuestsPageComponent,
    GuestsSearchComponent,
    GuestsTableComponent
  ],
  imports: [
    CommonModule,
    GuestsRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    NgxPaginationModule,
    TranslateModule,
    FormsModule,
  ]
})
export class GuestsModule { }
