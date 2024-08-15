import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild("dropdown_container", { static: false }) DropdownContainer: ElementRef;
  @ViewChild("dropdownArrow", { static: false }) dropdownArrow: ElementRef;
  language:string;

  constructor(public userService: UserService, private _router: Router) { 
    this.language = localStorage.getItem("lang") || "en";
  }

  logOut() {
    this.userService.logout();
    this._router.navigate(['/']);
  }

  DropDown() {
    if (this.DropdownContainer.nativeElement.style.display === "flex") {
      this.DropdownContainer.nativeElement.style.display = "none";
      this.dropdownArrow.nativeElement.style.transform = "rotate(180deg)";
    } else {
      this.DropdownContainer.nativeElement.style.display = "flex";
      this.dropdownArrow.nativeElement.style.transform = "rotate(0deg)";
    }
  }

//  get reportsRouterLink() {
//     const route = ([
//       { policy: 'ReportVolunteer', path: 'volunteer', },
//       { policy: 'ReportAgenda', path: 'agenda', },
//       { policy: 'ReportEvent', path: 'event', },
//       { policy: 'ReportEmployee', path: 'employees', },
//       { policy: 'ReportGuest', path: 'guests', }
//     ] as const).find(({ policy }) => this.userService.hasUserPolicy(policy));
//     if (!route) return '';
//     return `reports/${route.path}`;
//   }
}
