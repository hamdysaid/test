import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportEmployeesPageComponent } from './components/report-employees-page/report-employees-page.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
      path: 'home',
      component: ReportEmployeesPageComponent,
      children: [
          {
            path:'',
            redirectTo:'employees',
            pathMatch:'full'
          },
          {
            path: 'activity',
            loadChildren:()=> import('./pages/activity/activity.module').then(m =>m.ActivityModule)
          },
          {
            path: 'employees',
            loadChildren:()=> import('./pages/employees/employees.module').then(m =>m.EmployeesModule)
          }
      ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportEmployeesRoutingModule { }
