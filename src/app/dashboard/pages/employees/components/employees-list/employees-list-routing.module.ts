import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListPageComponent } from './employees-list-page/employees-list-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:EmployeesListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesListRoutingModule { }
