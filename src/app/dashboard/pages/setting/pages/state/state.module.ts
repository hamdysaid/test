import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StateRoutingModule } from './state-routing.module';
import { StatePageComponent } from './components/state-page/state-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { CardComponent } from './components/card/card.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    StatePageComponent,
    FormComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    StateRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    TranslateModule
  ]
})
export class StateModule { }
