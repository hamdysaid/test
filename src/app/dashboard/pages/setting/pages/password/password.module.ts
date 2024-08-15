import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PasswordRoutingModule } from './password-routing.module';
import { PasswordPageComponent } from './components/password-page/password-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    PasswordPageComponent
  ],
  imports: [
    CommonModule,
    PasswordRoutingModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    TranslateModule
  ]
})
export class PasswordModule { }
