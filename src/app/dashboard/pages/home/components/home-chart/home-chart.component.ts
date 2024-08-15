import { OnInit, Component } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { tap } from 'rxjs';
import { DetailService } from 'src/app/service/detail.service';

@Component({
  selector: 'app-home-chart',
  templateUrl: './home-chart.component.html',
  styleUrls: ['./home-chart.component.css']
})
export class HomeChartComponent implements OnInit {
  language:string;
  constructor(private _detailService:DetailService) {
    this.language = localStorage.getItem("lang") || "en";
  }
  ngOnInit(): void {
    this._detailService.ChartVolunteerRequest().pipe(
      tap(
        {
          next:(res)=>{
            this.barChartData[0].data = [
              res.response.january,
              res.response.february,
              res.response.march,
              res.response.april,
              res.response.may,
              res.response.june,
              res.response.july,
              res.response.august,
              res.response.september,
              res.response.october,
              res.response.november,
              res.response.december,
            ];
          }
        }
      )
    ).subscribe({});
  }
  barChartData: ChartDataSets[] = [{
    data: [  
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0],
    label: 'Volunteer Request',
    backgroundColor: '#B68934',
  }];
  barChartsLabels: Label[]=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep'];
  barChartOptions : ChartOptions = {
    responsive:true
  };
  barChartType:ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

}
