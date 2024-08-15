import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventDesignRoutingModule } from './event-design-routing.module';
import { EventDesignPageComponent } from './components/event-design-page/event-design-page.component';
import { MaterialExampleModule } from 'src/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { EventDesignUpdateComponent } from './components/event-design-update/event-design-update.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    EventDesignPageComponent,
    EventDesignUpdateComponent,
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
