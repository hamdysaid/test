import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerListPageComponent } from './components/volunteer-list-page/volunteer-list-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:VolunteerListPageComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerListRoutingModule { }
