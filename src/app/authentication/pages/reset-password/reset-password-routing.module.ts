import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordPageComponent } from './components/reset-password-page/reset-password-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:ResetPasswordPageComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
