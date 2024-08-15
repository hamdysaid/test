import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesViewPageComponent } from './employees-view-page/employees-view-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:EmployeesViewPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesViewRoutingModule { }
