import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvtationsRoutingModule } from './invtations-routing.module';
import { InvtationsPageComponent } from './components/invtations-page/invtations-page.component';
import { InvtationsSearchComponent } from './components/invtations-search/invtations-search.component';
import { InvtationsFilterComponent } from './components/invtations-filter/invtations-filter.component';
import { InvtationsTableComponent } from './components/invtations-table/invtations-table.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    InvtationsPageComponent,
    InvtationsSearchComponent,
    InvtationsFilterComponent,
    InvtationsTableComponent
  ],
  imports: [
    CommonModule,
    InvtationsRoutingModule,
    NgxPaginationModule,
    SweetAlert2Module,
    ReactiveFormsModule,
    NgbModalModule,
    TranslateModule,
    NgSelectModule
  ]
})
export class InvtationsModule { }
