import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatePageComponent } from './components/state-page/state-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:StatePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
