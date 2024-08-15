import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventViewPageComponent } from './components/event-view-page/event-view-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:EventViewPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventViewRoutingModule { }
