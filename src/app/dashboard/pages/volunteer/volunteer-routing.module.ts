import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'volunteer-list',
    pathMatch:'full'
  },
    {
      path:'volunteer-list',
      pathMatch:'full',
      loadChildren:()=> import('./components/volunteer-list/volunteer-list.module').then(m =>m.VolunteerListModule)
    },
    {
      path:'invtations',
      pathMatch:'full',
      loadChildren:()=> import('./components/invtations/invtations.module').then(m =>m.InvtationsModule)
    },
    {
      path:'volunteer-view',
      loadChildren:()=> import('./components/volunteer-view/volunteer-view.module').then(m =>m.VolunteerViewModule)
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VolunteerRoutingModule { }
