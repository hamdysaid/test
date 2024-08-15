import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventPageComponent } from './components/event-page/event-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:EventPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddEventRoutingModule { }
