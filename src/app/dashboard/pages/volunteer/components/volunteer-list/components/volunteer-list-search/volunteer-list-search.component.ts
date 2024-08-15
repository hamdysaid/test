import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';
import { StateMachineService } from 'src/app/service/state-machine.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-volunteer-list-search',
  templateUrl: './volunteer-list-search.component.html',
  styleUrls: ['../volunteer-list-page/volunteer-list-page.component.css']
})
export class VolunteerListSearchComponent implements OnInit {
  form = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  constructor(protected _stateMachineService: StateMachineService, protected _userService: UserService) { }

  ngOnInit(): void {
    this.form.controls.search.valueChanges.pipe(debounceTime(250)).subscribe((value) => this.submit());
  }

  submit() {
    let { search } = this.form.value;
    this._userService.volunteerSearchPagenation.search = search ? search.trim() : null;
    this._userService.getPage(this._userService.volunteerSearchPagenation.page ?? 1, this._userService.volunteerSearchPagenation);
  }
}
