import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerViewPageComponent } from './components/volunteer-view-page/volunteer-view-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home/:id',
    component: VolunteerViewPageComponent,
    children: [
      {
        path: 'invtations/:id',
        pathMatch: 'full',
        loadChildren: () =>
          import(
            './pages/volunteer-invtations/volunteer-invtations.module'
          ).then((m) => m.VolunteerInvtationsModule),
      },
      {
        path: 'certificate/:id',
        pathMatch: 'full',
        loadChildren: () =>
          import(
            './pages/volunteer-certificate/volunteer-certificate.module'
          ).then((m) => m.VolunteerCertificateModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VolunteerViewRoutingModule {}
