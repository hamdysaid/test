import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestsPageComponent } from './components/guests-page/guests-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:GuestsPageComponent,
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestsRoutingModule { }
