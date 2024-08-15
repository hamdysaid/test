import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-event-view-page',
  templateUrl: './event-view-page.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-view-page.component.css']
})
export class EventViewPageComponent implements OnInit{
  evendId:number|null = null;
constructor(
  private _routr:Router,
  private _activatedRoute:ActivatedRoute) {
}
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next:(res)=>{
        if(res.get("id"))
          this.evendId = +res.get("id")!;
        else
          this._routr.navigate(["../"]);
      }
    });
  }

}
