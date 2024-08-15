import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'employees-list',
    pathMatch:'full'
  },
    {
      path:'employees-list',
      pathMatch:'full',
      loadChildren:()=> import('./components/employees-list/employees-list.module').then(m =>m.EmployeesListModule)
    },
    {
      path:'employees-view/:id',
      loadChildren:()=> import('./components/employees-view/employees-view.module').then(m =>m.EmployeesViewModule)
    },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
