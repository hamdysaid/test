import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DegreeRoutingModule } from './degree-routing.module';
import { DegreePageComponent } from './components/degree-page/degree-page.component';
import { FormComponent } from './components/form/form.component';
import { CardsComponent } from './components/cards/cards.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    DegreePageComponent,
    FormComponent,
    CardsComponent
  ],
  imports: [
    CommonModule,
    DegreeRoutingModule,
    SweetAlert2Module,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class DegreeModule { }
