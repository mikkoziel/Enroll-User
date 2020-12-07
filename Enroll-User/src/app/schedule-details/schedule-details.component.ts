import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Schedule } from '../interfaces/schedule';
import { ScheduleService } from '../services/schedule.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  schedules: Schedule[] = null;
  
  schedulesEmitter = new BehaviorSubject<Schedule[]>(this.schedules);

  constructor(private scheduleService: ScheduleService) { 
    this.getSchedules();
   }

  ngOnInit(): void {
  }

  getSchedules(): void {
    this.scheduleService.getSchedules().subscribe(sch =>{
      this.schedules = sch;
      console.log(this.schedules);
      this.schedulesEmitter.next(this.schedules);
    })
  }
}
