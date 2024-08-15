import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditEventRoutingModule } from './edit-event-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { EventInfoComponent } from './components/event-info/event-info.component';
import { EventPageComponent } from './components/event-page/event-page.component';
import { EventScheduleComponent } from './components/event-schedule/event-schedule.component';
import { EventScheduleFormComponent } from './components/event-schedule-form/event-schedule-form.component';
import { EventSpeakerFormComponent } from './components/event-speaker-form/event-speaker-form.component';
import { EventSpeakerComponent } from './components/event-speaker/event-speaker.component';
import { EventSponsorsComponent } from './components/event-sponsors/event-sponsors.component';
import { EventSponsorsFormComponent } from './components/event-sponsors-form/event-sponsors-form.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EventInfoComponent,
    EventPageComponent,
    EventScheduleComponent,
    EventScheduleFormComponent,
    EventSpeakerFormComponent,
    EventSpeakerComponent,
    EventSponsorsComponent,
    EventSponsorsFormComponent
  ],
  imports: [
    CommonModule,
    EditEventRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule
  ]
})
export class EditEventModule { }
