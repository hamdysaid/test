import { NumberInput } from '@angular/cdk/coercion';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StateMachineService } from 'src/app/service/state-machine.service';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['../../../../components/event-home/event-home.component.css','./event-page.component.css']
})
export class EventPageComponent implements OnInit, OnDestroy{
  form:FormGroup= new FormGroup({
    numberofChair : new FormControl(10,[Validators.required])
  });
  language:string;
constructor(
  private _modal:NgbModal
  ,protected _stateMachineService:StateMachineService,private _router:Router) {
    this.language = localStorage.getItem("lang") || "en";
  }
  ngOnDestroy(): void {
    this._stateMachineService.ShowAddEvent(false);
    localStorage.removeItem("eventId");
  }
  showPopUp(){
    this._modal.open('modalNext');
  }

  ngOnInit(): void {
    // this._stateMachineService.ShowAddEvent(true);
  }
  gotToEventDesign(){
    let {numberofChair} = this.form.value;
    // console.log(numberofChair);
    if(+numberofChair <= 0){
      return;
    }
    // this._modal.dismissAll();
    const queryParams = { id: localStorage.getItem("eventId"), number: numberofChair };
    this._router.navigate(['/dashboard/home/event/home/event-design'],{queryParams: queryParams});
    this.form.reset();
  }
}
