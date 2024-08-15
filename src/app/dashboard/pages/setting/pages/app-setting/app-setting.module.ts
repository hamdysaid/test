import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingRoutingModule } from './app-setting-routing.module';
import { AppSettingPageComponent } from './components/app-setting-page/app-setting-page.component';


@NgModule({
  declarations: [
    AppSettingPageComponent
  ],
  imports: [
    CommonModule,
    AppSettingRoutingModule
  ]
})
export class AppSettingModule { }
