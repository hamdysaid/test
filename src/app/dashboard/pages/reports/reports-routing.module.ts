import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'volunteer'
  },
  {
    path: 'volunteer',
    loadChildren: () => import('./components/report-volunteer/report-volunteer.module').then(m => m.ReportVolunteerModule)
  },
  {
    path: 'agenda',
    pathMatch: 'full',
    loadChildren: () => import('./components/report-agenda/report-agenda.module').then(m => m.ReportAgendaModule)
  },
  {
    path: 'event',
    pathMatch: 'full',
    loadChildren: () => import('./components/report-event/report-event.module').then(m => m.ReportEventModule)
  },
  {
    path: 'employees',
    loadChildren: () => import('./components/report-employees/report-employees.module').then(m => m.ReportEmployeesModule)
  },
  {
    path: 'guests',
    loadChildren: () => import('./components/report-guests/report-guests.module').then(m => m.ReportGuestsModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {
  constructor(userService: UserService) {
    const validRoute = ([
      { policy: 'ReportVolunteer', path: 'volunteer', },
      { policy: 'ReportAgenda', path: 'agenda', },
      { policy: 'ReportEvent', path: 'event', },
      { policy: 'ReportEmployee', path: 'employees', },
      { policy: 'ReportGuest', path: 'guests', }
    ] as const).find(({ policy }) => userService.hasUserPolicy(policy));
    routes[0].redirectTo = validRoute?.path;
  }
}
