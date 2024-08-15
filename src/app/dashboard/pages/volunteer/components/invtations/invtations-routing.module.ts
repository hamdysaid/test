import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvtationsPageComponent } from './components/invtations-page/invtations-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:InvtationsPageComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvtationsRoutingModule { }
