import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvitationsRoutingModule } from './invitations-routing.module';
import { InvitationsPageComponent } from './components/invitations-page/invitations-page.component';
import { InvitationsFilterComponent } from './components/invitations-filter/invitations-filter.component';
import { InvitationsSearchComponent } from './components/invitations-search/invitations-search.component';
import { InvitationsTableComponent } from './components/invitations-table/invitations-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    InvitationsPageComponent,
    InvitationsFilterComponent,
    InvitationsSearchComponent,
    InvitationsTableComponent
  ],
  imports: [
    CommonModule,
    InvitationsRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    TranslateModule
  ]
})
export class InvitationsModule { }
