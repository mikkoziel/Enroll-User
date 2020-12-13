import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ScheduleOverviewComponent } from './schedule-overview/schedule-overview.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';
import { ClassOverviewComponent } from './class-overview/class-overview.component';
import { CalendarScheduleComponent } from './calendar-schedule/calendar-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserPanelComponent,
    SideNavComponent,
    ScheduleOverviewComponent,
    ScheduleDetailsComponent,
    ClassOverviewComponent,
    CalendarScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
