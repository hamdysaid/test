import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarSettingComponent } from './components/sidebar-setting/sidebar-setting.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    SidebarSettingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule
  ],
  exports:[
    SidebarSettingComponent
  ]
})
export class SharedSettingModule { }
