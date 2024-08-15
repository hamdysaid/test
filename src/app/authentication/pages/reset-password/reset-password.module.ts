import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordPageComponent } from './components/reset-password-page/reset-password-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ResetPasswordPageComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    TranslateModule
  ]
})
export class ResetPasswordModule { }
