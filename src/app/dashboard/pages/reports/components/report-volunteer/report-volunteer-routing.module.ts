import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportVolunteerHomeComponent } from './components/report-volunteer-home/report-volunteer-home.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
      path: 'home',
      component: ReportVolunteerHomeComponent,
      children: [
          {
            path:'',
            redirectTo:'volunteer',
            pathMatch:'full'
          },
          {
            path: 'invitations',
            loadChildren:()=> import('./pages/invitations/invitations.module').then(m =>m.InvitationsModule)
          },
          {
            path: 'volunteer',
            loadChildren:()=> import('./pages/volunteer-data/volunteer-data.module').then(m =>m.VolunteerDataModule)
          }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportVolunteerRoutingModule { }
