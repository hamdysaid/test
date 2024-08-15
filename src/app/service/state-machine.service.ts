import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateMachineService {
  showVolunteerFilterSeach:boolean = false;
  showAddEvent = false;
  constructor() { }
  ShowVolunteerFilterSeach(){
    this.showVolunteerFilterSeach = !this.showVolunteerFilterSeach;
  }

  ShowAddEvent(show: boolean){
    this.showAddEvent = show;
  }
}
