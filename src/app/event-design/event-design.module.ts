import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDesignRoutingModule } from './event-design-routing.module';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialExampleModule } from 'src/material.module';
import { ViewComponent } from './components/view/view.component';


@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    EventDesignRoutingModule,
    MaterialExampleModule,
    NgbModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class EventDesignModule { }
