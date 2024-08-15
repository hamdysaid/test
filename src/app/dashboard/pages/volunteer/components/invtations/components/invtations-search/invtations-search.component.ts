import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { debounceTime } from 'rxjs';
import { invitationservice } from 'src/app/service/invitaion.service';
import { StateMachineService } from 'src/app/service/state-machine.service';

@Component({
  selector: 'app-invtations-search',
  templateUrl: './invtations-search.component.html',
  styleUrls: ['../../../volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css', './invtations-search.component.css']
})
export class InvtationsSearchComponent implements OnInit {
  form = new FormGroup({
    search: new FormControl('', [Validators.required]),
  });

  constructor(protected _stateMachineService: StateMachineService, protected _invitationService: invitationservice, private _toastr: ToastrService) { }

  ngOnInit(): void {
    this.form.controls.search.valueChanges.pipe(debounceTime(250)).subscribe((value) => this.submit());
  }


  submit() {
    let { search } = this.form.value;
    this._invitationService.volunteerSearchPagenation.search = search ? search.trim() : null;
    this._invitationService.getPage(this._invitationService.volunteerSearchPagenation.page ?? 1, this._invitationService.volunteerSearchPagenation);
  }

}
