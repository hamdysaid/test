import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'create'
  },
  { 
    path: 'hall/create',
    pathMatch:'full',
    component:CreateComponent,
  },
  {
    path: 'hall/update',
    pathMatch:'full',
    component: UpdateComponent
  },
  {
    path: 'hall/guest-view',
    pathMatch:'full',
    component: ViewComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventDesignRoutingModule { }

