import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordPageComponent } from './components/password-page/password-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:PasswordPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PasswordRoutingModule { }
