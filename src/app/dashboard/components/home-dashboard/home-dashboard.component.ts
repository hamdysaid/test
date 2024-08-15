import { Component } from '@angular/core';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent {
  constructor(){
    this.language = localStorage.getItem("lang") || "en";
  }
  language:string;
  ngOnInit(): void {
    this.language = localStorage.getItem("lang") || "en";
  }
}
