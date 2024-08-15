import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAuthenticationComponent } from './pages/components/home-authentication/home-authentication.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'identity',
    pathMatch:'full'
  },
  {
      path: 'identity',
      component: HomeAuthenticationComponent,
      children: [
          {
            path:'',
            redirectTo:'login',
            pathMatch:'full'
          },
          {
            path: 'login',
            loadChildren:()=> import('../authentication/pages/login/login.module').then(m =>m.LoginModule)
          },
          {
            path: 'register',
            loadChildren:()=> import('../authentication/pages/register/register.module').then(m =>m.RegisterModule)
          },
          {
            path: 'forgetpassword',
            loadChildren:()=> import('../authentication/pages/forget-password/forget-password.module').then(m =>m.ForgetPasswordModule)
          },
          {
            path: 'resetpassword',
            loadChildren:()=> import('../authentication/pages/reset-password/reset-password.module').then(m =>m.ResetPasswordModule)
          }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
