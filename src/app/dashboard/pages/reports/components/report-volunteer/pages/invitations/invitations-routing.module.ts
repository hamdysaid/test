import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvitationsPageComponent } from './components/invitations-page/invitations-page.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch:'full',
    component:InvitationsPageComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitationsRoutingModule { }
