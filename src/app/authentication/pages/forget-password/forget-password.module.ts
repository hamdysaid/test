import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgetPasswordRoutingModule } from './forget-password-routing.module';
import { ForgetPasswordPageComponent } from './components/forget-password-page/forget-password-page.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ForgetPasswordPageComponent
  ],
  imports: [
    CommonModule,
    ForgetPasswordRoutingModule,
    ReactiveFormsModule,
  ]
})
export class ForgetPasswordModule { }
