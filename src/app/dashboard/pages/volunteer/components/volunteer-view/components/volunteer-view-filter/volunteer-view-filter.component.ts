import { OnInit, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from 'rxjs';
import { VolunteerStatusService } from 'src/app/service/volunteer-status.service';

@Component({
  selector: 'app-volunteer-view-filter',
  templateUrl: './volunteer-view-filter.component.html',
  styleUrls: ['../../../volunteer-list/components/volunteer-list-page/volunteer-list-page.component.css','./volunteer-view-filter.component.css']
})
export class VolunteerViewFilterComponent implements OnInit{
  @Input() statusId:number ;
  constructor(protected _volunteerStatus:VolunteerStatusService) {
  }
  ngOnInit(): void {
    
    this._volunteerStatus.Get().subscribe({
      next:(res)=>{
        this._volunteerStatus.entities = res.response.data;
      }
    });
  }
submit(){}
}
