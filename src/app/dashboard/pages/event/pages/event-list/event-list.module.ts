import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventListRoutingModule } from './event-list-routing.module';
import { EventListPageComponent } from './components/event-list-page/event-list-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EventListPageComponent
  ],
  imports: [
    CommonModule,
    EventListRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    NgxPaginationModule,
    TranslateModule
  ]
})
export class EventListModule { }
