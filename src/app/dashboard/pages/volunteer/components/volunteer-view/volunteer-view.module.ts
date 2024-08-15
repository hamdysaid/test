import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerViewRoutingModule } from './volunteer-view-routing.module';
import { VolunteerViewBoxComponent } from './components/volunteer-view-box/volunteer-view-box.component';
import { VolunteerViewPageComponent } from './components/volunteer-view-page/volunteer-view-page.component';
import { VolunteerViewFilterComponent } from './components/volunteer-view-filter/volunteer-view-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    VolunteerViewBoxComponent,
    VolunteerViewPageComponent,
    VolunteerViewFilterComponent
  ],
  imports: [
    CommonModule,
    VolunteerViewRoutingModule,
    ReactiveFormsModule,
    NgSelectModule,
    TranslateModule
  ]
})
export class VolunteerViewModule { }
