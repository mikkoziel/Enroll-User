import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from '../interfaces/schedule';
import { User } from '../interfaces/user';
import { ScheduleService } from '../services/schedule.service';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-schedule-overview',
  templateUrl: './schedule-overview.component.html',
  styleUrls: ['./schedule-overview.component.css']
})
export class ScheduleOverviewComponent implements OnInit {
  schedules: Schedule[] = null;

  currentUser: User;
  
  constructor(
    // private scheduleService: ScheduleService,
    private serverService: ServerService) {
   }

  ngOnInit(): void {
    this.currentUser = <User>{id:1} 
    this.getSchedules();
  }

  getSchedules(){
    this.serverService.getSchedules(this.currentUser.id).subscribe((x: Schedule[])=> {
      this.schedules = x;
    });
  }

}
