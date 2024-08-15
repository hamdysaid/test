import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventHomeComponent } from './components/event-home/event-home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: EventHomeComponent,
    children: [
      {
        path:'',
        redirectTo:'events',
        pathMatch:'full'
      },
      {
        path:'events',
        pathMatch:'full',
        loadChildren:()=> import('./pages/event-list/event-list.module').then(m =>m.EventListModule)
      },
      {
        path:'event-view/:id',
        pathMatch:'full',
        loadChildren:()=> import('./pages/event-view/event-view.module').then(m =>m.EventViewModule)
      },
      {
        path:'add-event',
        pathMatch:'full',
        loadChildren:()=> import('./pages/add-event/add-event.module').then(m =>m.AddEventModule)
      },
      {
        path:'edit-event',
        pathMatch:'full',
        loadChildren:()=> import('./pages/edit-event/edit-event.module').then(m =>m.EditEventModule)
      },
      {
        path:'event-design',
        loadChildren:()=> import('./pages/event-design/event-design.module').then(m =>m.EventDesignModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
