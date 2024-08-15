import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HomeBoxsComponent } from './components/home-boxs/home-boxs.component';
import { HomeEventComponent } from './components/home-event/home-event.component';
import { HomeAgendaComponent } from './components/home-agenda/home-agenda.component';
import { HomeChartComponent } from './components/home-chart/home-chart.component';
import { HomeTableComponent } from './components/home-table/home-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ChartsModule } from 'ng2-charts';
import { TranslateModule } from '@ngx-translate/core';
import { CreateVacationModalComponent } from './components/create-vacation-modal/create-vacation-modal.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomePageComponent,
    HomeBoxsComponent,
    HomeEventComponent,
    HomeAgendaComponent,
    HomeTableComponent,
    HomeChartComponent,
    CreateVacationModalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxPaginationModule,
    SweetAlert2Module,
    ChartsModule,
    TranslateModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
