import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListPageComponent } from './components/event-list-page/event-list-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:EventListPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventListRoutingModule { }
