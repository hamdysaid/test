import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerInvtationsRoutingModule } from './volunteer-invtations-routing.module';
import { VolunteerInvtationsPageComponent } from './components/volunteer-invtations-page/volunteer-invtations-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    VolunteerInvtationsPageComponent
  ],
  imports: [
    CommonModule,
    VolunteerInvtationsRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class VolunteerInvtationsModule { }
