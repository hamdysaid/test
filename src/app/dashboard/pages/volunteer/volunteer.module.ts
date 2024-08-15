import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerRoutingModule } from './volunteer-routing.module';
import { InvtationsModule } from './components/invtations/invtations.module';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VolunteerRoutingModule,
  ]
})
export class VolunteerModule { }
