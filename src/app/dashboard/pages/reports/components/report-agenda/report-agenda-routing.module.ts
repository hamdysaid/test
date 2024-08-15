import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportAgendaPageComponent } from './components/report-agenda-page/report-agenda-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:ReportAgendaPageComponent,
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportAgendaRoutingModule { }
