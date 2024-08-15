import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordPageComponent } from './components/forget-password-page/forget-password-page.component';

const routes: Routes = [
    { 
      path: '',
      pathMatch:'full',
      component:ForgetPasswordPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForgetPasswordRoutingModule { }
