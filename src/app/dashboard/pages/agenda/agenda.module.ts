import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgendaRoutingModule } from './agenda-routing.module';
import { AddComponent } from './components/add/add.component';
import { PageComponent } from './components/page/page.component';
import { CalenderComponent } from './components/calender/calender.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    AddComponent,
    PageComponent,
    CalenderComponent
  ],
  imports: [
    CommonModule,
    AgendaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModalModule,
    TranslateModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ]
})
export class AgendaModule { }
