import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerDataPageComponent } from './components/volunteer-data-page/volunteer-data-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:VolunteerDataPageComponent,
  },
  
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerDataRoutingModule { }
