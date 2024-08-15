import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusPageComponent } from './components/status-page/status-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:StatusPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatusRoutingModule { }
