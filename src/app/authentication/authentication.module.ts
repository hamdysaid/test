import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { HomeAuthenticationComponent } from './pages/components/home-authentication/home-authentication.component';
import { OTPModalComponent } from './pages/components/OTP-modal/OTP-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeAuthenticationComponent,
    OTPModalComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthenticationModule { }
