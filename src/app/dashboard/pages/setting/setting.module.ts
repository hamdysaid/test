import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SharedSettingModule } from "./shared-setting/shared-setting.module";
import { HomeSettingComponent } from './components/home-setting/home-setting.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    declarations: [
        HomeSettingComponent
    ],
    imports: [
        CommonModule,
        SettingRoutingModule,
        SharedSettingModule,
        TranslateModule
    ]
})
export class SettingModule { }
