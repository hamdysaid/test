import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyInfoRoutingModule } from './my-info-routing.module';
import { MyInfoPageComponent } from './components/my-info-page/my-info-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    MyInfoPageComponent
  ],
  imports: [
    CommonModule,
    MyInfoRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class MyInfoModule { }
