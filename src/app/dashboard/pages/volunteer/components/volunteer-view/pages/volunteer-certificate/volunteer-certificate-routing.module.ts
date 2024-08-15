import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerCertificatePageComponent } from './components/volunteer-certificate-page/volunteer-certificate-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:VolunteerCertificatePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerCertificateRoutingModule { }
