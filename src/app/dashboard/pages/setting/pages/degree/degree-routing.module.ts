import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DegreePageComponent } from './components/degree-page/degree-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:DegreePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DegreeRoutingModule { }
