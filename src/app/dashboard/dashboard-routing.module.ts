import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
      path: 'home',
      component: HomeDashboardComponent,
      children: [
          {
            path:'',
            redirectTo:'index',
            pathMatch:'full'
          },
          {
            path: 'index',
            loadChildren:()=> import('../dashboard/pages/home/home.module').then(m =>m.HomeModule)
          },
          {
            path: 'employees',
            loadChildren:()=> import('../dashboard/pages/employees/employees.module').then(m =>m.EmployeesModule)
          },
          {
            path: 'volunteer',
            loadChildren:()=> import('../dashboard/pages/volunteer/volunteer.module').then(m =>m.VolunteerModule)
          },
          {
            path: 'agenda',
            loadChildren:()=> import('../dashboard/pages/agenda/agenda.module').then(m =>m.AgendaModule)
          },
          {
            path: 'event',
            loadChildren:()=> import('../dashboard/pages/event/event.module').then(m =>m.EventModule)
          },
          {
            path: 'guests',
            loadChildren:()=> import('../dashboard/pages/guests/guests.module').then(m =>m.GuestsModule)
          },
          {
            path: 'reports',
            loadChildren:()=> import('../dashboard/pages/reports/reports.module').then(m =>m.ReportsModule)
          },
          {
              path: 'setting',
              loadChildren:()=> import('../dashboard/pages/setting/setting.module').then(m =>m.SettingModule)
          }
      ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
