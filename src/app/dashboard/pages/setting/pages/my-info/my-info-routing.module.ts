import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInfoPageComponent } from './components/my-info-page/my-info-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:MyInfoPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyInfoRoutingModule { }
