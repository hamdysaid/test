import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VolunteerCertificateRoutingModule } from './volunteer-certificate-routing.module';
import { VolunteerCertificatePageComponent } from './components/volunteer-certificate-page/volunteer-certificate-page.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    VolunteerCertificatePageComponent
  ],
  imports: [
    CommonModule,
    VolunteerCertificateRoutingModule,
    TranslateModule
  ]
})
export class VolunteerCertificateModule { }
