import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSettingComponent } from './components/home-setting/home-setting.component';
import { AdminGuard } from 'src/app/Guards/admin.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
      path: 'home',
      component: HomeSettingComponent,
      children: [
          {
            path:'',
            redirectTo:'my-info',
            pathMatch:'full'
          },
          {
            path: 'access',
            canActivate:[AdminGuard],
            canActivateChild:[AdminGuard],
            loadChildren:()=> import('../setting/pages/access/access.module').then(m =>m.AccessModule)
          },
          // {
          //   path: 'app-setting',
          //   canActivate:[AdminGuard],
          //   canActivateChild:[AdminGuard],
          //   loadChildren:()=> import('../setting/pages/app-setting/app-setting.module').then(m =>m.AppSettingModule)
          // },
          {
            path: 'degree',
            loadChildren:()=> import('../setting/pages/degree/degree.module').then(m =>m.DegreeModule)
          },
          {
            path: 'department',
            loadChildren:()=> import('../setting/pages/department/department.module').then(m =>m.DepartmentModule)
          },
          {
            path: 'my-info',
            loadChildren:()=> import('../setting/pages/my-info/my-info.module').then(m =>m.MyInfoModule)
          },
          {
            path: 'password',
            loadChildren:()=> import('../setting/pages/password/password.module').then(m =>m.PasswordModule)
           },
           {
             path: 'state',
             loadChildren:()=> import('../setting/pages/state/state.module').then(m =>m.StateModule)
          },
          {
            path: 'status',
            canActivate:[AdminGuard],
            canActivateChild:[AdminGuard],
            loadChildren:()=> import('../setting/pages/status/status.module').then(m =>m.StatusModule)
         }
      ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
