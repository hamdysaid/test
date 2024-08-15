import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentPageComponent } from './components/department-page/department-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:DepartmentPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
