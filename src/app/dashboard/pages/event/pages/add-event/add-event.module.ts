import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddEventRoutingModule } from './add-event-routing.module';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { EventScheduleComponent } from './components/event-schedule/event-schedule.component';
import { EventSpeakersComponent } from './components/event-speakers/event-speakers.component';
import { EventSponsorsComponent } from './components/event-sponsors/event-sponsors.component';
import { EventColorComponent } from './components/event-color/event-color.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { EventScheduleFormComponent } from './components/event-schedule-form/event-schedule-form.component';
import { EventSpeakersFormComponent } from './components/event-speakers-form/event-speakers-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { EventSponsorsFormComponent } from './components/event-sponsors-form/event-sponsors-form.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EventInfoComponent,
    EventScheduleComponent,
    EventSpeakersComponent,
    EventSponsorsComponent,
    EventColorComponent,
    EventPageComponent,
    EventScheduleFormComponent,
    EventSpeakersFormComponent,
    EventSponsorsFormComponent
  ],
  imports: [
    CommonModule,
    AddEventRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule
  ]
})
export class AddEventModule { }
