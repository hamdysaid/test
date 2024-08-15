import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/service/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-volunteer-list-table',
  templateUrl: './volunteer-list-table.component.html',
  styleUrls: ['../volunteer-list-page/volunteer-list-page.component.css']
})
export class VolunteerListTableComponent implements OnInit {
  imagePath = environment.imageEndPoint;
  language:string;
  constructor(protected _userService: UserService, private _toastr: ToastrService) {
    this.language = localStorage.getItem("lang") || "en";
  }
  ngOnInit(): void {
    this._userService.getPage(1, this._userService.volunteerSearchPagenation);
  }

  changeActivation(email: string) {
    // console.log(email);
    this._userService.changeAvailable(email).subscribe({
      next: (res) => {
        this._userService.getPage(this._userService.volunteerSearchPagenation.page ?? 1, this._userService.volunteerSearchPagenation);
        //console.log(res);
      },
      error: (err) => {
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }

  deleteUser(email: string) {
    this._userService.deleteUser(email).subscribe({
      next: (res) => {
        this._userService.getPage(this._userService.volunteerSearchPagenation.page ?? 1, this._userService.volunteerSearchPagenation);
        //console.log(res);
      },
      error: (err) => {
// console.log(err);
        this._toastr.error(err.error.message);
      }
    });
  }
}
