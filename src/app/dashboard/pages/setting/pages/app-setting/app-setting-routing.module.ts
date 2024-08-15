import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSettingPageComponent } from './components/app-setting-page/app-setting-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:AppSettingPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppSettingRoutingModule { }
