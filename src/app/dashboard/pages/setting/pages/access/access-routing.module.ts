import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessPageComponent } from './components/access-page/access-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:AccessPageComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccessRoutingModule { }
