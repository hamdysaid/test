import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityPageComponent } from './components/activity-page/activity-page.component';
import { ActivityFilterComponent } from './components/activity-filter/activity-filter.component';
import { ActivitySearchComponent } from './components/activity-search/activity-search.component';
import { ActivityTableComponent } from './components/activity-table/activity-table.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ActivityPageComponent,
    ActivityFilterComponent,
    ActivitySearchComponent,
    ActivityTableComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    TranslateModule
  ]
})
export class ActivityModule { }
