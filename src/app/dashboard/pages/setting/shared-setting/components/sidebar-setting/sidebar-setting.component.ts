import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sidebar-setting',
  templateUrl: './sidebar-setting.component.html',
  styleUrls: ['../../../pages/access/components/access-page/access-page.component.css', './sidebar-setting.component.css']
})
export class SidebarSettingComponent {
  constructor(public _userService: UserService) { }
}
