import { Component, Input } from '@angular/core';
import { EmployeeChart } from 'src/app/models/employee';

@Component({
  selector: 'app-home-boxs',
  templateUrl: './home-boxs.component.html',
  styleUrls: ['./home-boxs.component.css']
})
export class HomeBoxsComponent {
@Input() isAdmin:boolean; 
@Input() VolunteerCurrentValue: number;
@Input() EventCurrentValue: number;
@Input() AgendaCurrentValue: number;
@Input() EmployeeCurrentValue: number;
@Input()chart: EmployeeChart;
}
