import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccessRoutingModule } from './access-routing.module';
import { AccessPageComponent } from './components/access-page/access-page.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AccessPageComponent
  ],
  imports: [
    CommonModule,
    AccessRoutingModule,
    NgSelectModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class AccessModule { }
