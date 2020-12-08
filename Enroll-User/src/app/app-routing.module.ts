import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const routes: Routes = [
    { path: '', redirectTo: '/user', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserPanelComponent },
    { path: 'schedule-details/:id', component: ScheduleDetailsComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  