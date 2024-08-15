import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDesignPageComponent } from './components/event-design-page/event-design-page.component';
import { EventDesignUpdateComponent } from './components/event-design-update/event-design-update.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'hall'
  },
  { 
    path: 'hall',
    pathMatch:'full',
    component:EventDesignPageComponent,
  },
  {
    path: 'hall-update',
    pathMatch:'full',
    component: EventDesignUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDesignRoutingModule { }
