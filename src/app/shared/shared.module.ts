import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TranslateModule
  ],
  exports:[
    SidebarComponent,
    TopbarComponent
  ]
})
export class SharedModule { }
