import { Component, Input } from '@angular/core';
import { EmployeeChart } from 'src/app/models/employee';

@Component({
  selector: 'app-employees-view-boxs',
  templateUrl: './employees-view-boxs.component.html',
  styleUrls: ['../../../../volunteer/components/volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css',
    './employees-view-boxs.component.css']
})
export class EmployeesViewBoxsComponent {
@Input()chart: EmployeeChart;
}
