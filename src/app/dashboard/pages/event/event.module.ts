import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventHomeComponent } from './components/event-home/event-home.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EventHomeComponent  
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    TranslateModule
  ]
})
export class EventModule { }
