import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAdminGuard } from './Guards/employee-admin.guard';
import { EventHallViewComponent } from './EventHallView/EventHallView.component';

const routes: Routes = [
  { 
    path:'',
    redirectTo:'auth',
    pathMatch:'full'
  },
  {
    path: 'eventHallView/:id',  // Ensure this path matches the URL segment
    component: EventHallViewComponent,
  },
  {
      path: 'auth',
      loadChildren:()=> import('./authentication/authentication.module').then(m =>m.AuthenticationModule)
  },
  {
      path: 'dashboard',
      canActivate: [EmployeeAdminGuard],
      canActivateChild:[EmployeeAdminGuard],
      loadChildren:()=> import('./dashboard/dashboard.module').then(m =>m.DashboardModule)
  },
  {
      path: 'event',
      loadChildren:()=> import('./event-design/event-design.module').then(m =>m.EventDesignModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
