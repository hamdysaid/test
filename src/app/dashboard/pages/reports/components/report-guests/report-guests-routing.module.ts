import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportGuestsPageComponent } from './components/report-guests-page/report-guests-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:ReportGuestsPageComponent,
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportGuestsRoutingModule { }
