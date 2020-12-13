import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from '../interfaces/schedule';
import { ScheduleService } from '../services/schedule.service';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-schedule-overview',
  templateUrl: './schedule-overview.component.html',
  styleUrls: ['./schedule-overview.component.css']
})
export class ScheduleOverviewComponent implements OnInit {
  schedules: Schedule[] = null;
  
  schedulesEmitter = new BehaviorSubject<Schedule[]>(this.schedules);

  constructor(private scheduleService: ScheduleService,
    private serverService: ServerService) { 
      this.getSchedules();
   }

  ngOnInit(): void {
  }

  getSchedules(){
    this.serverService.getSchedules(1).subscribe((x: Schedule[])=> {
      this.schedules = x;    
      this.schedulesEmitter.next(this.schedules);});
  }

}
