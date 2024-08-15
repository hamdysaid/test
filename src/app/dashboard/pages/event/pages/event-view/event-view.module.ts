import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventViewRoutingModule } from './event-view-routing.module';
import { EventViewPageComponent } from './components/event-view-page/event-view-page.component';
import { EventViewDataComponent } from './components/event-view-data/event-view-data.component';
import { EventViewScheduleComponent } from './components/event-view-schedule/event-view-schedule.component';
import { EventViewSpeakersComponent } from './components/event-view-speakers/event-view-speakers.component';
import { EventViewSponsorsComponent } from './components/event-view-sponsors/event-view-sponsors.component';
import { DesignComponent } from './components/design/design.component';
import { MaterialExampleModule } from 'src/material.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EventViewPageComponent,
    EventViewDataComponent,
    EventViewScheduleComponent,
    EventViewSpeakersComponent,
    EventViewSponsorsComponent,
    DesignComponent
  ],
  imports: [
    CommonModule,
    EventViewRoutingModule,
    MaterialExampleModule,
    TranslateModule
  ]
})
export class EventViewModule { }
