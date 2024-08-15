import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerInvtationsPageComponent } from './components/volunteer-invtations-page/volunteer-invtations-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:VolunteerInvtationsPageComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerInvtationsRoutingModule { }
