import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportEventPageComponent } from './components/report-event-page/report-event-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:ReportEventPageComponent,
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportEventRoutingModule { }
