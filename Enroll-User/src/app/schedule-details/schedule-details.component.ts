import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Professor } from '../interfaces/professor';
import { Schedule } from '../interfaces/schedule';
import { ScheduleService } from '../services/schedule.service';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-schedule-details',
  templateUrl: './schedule-details.component.html',
  styleUrls: ['./schedule-details.component.css']
})
export class ScheduleDetailsComponent implements OnInit {
  panelOpenState: boolean = false;
  id: number;
  data: Schedule;
  sub: Subscription;  
  classes: Array<number> = [];
  professors: Professor[];
  
  constructor(private _Activatedroute:ActivatedRoute,
    private scheduleService: ScheduleService,
    private serverService: ServerService) { 
   }

  ngOnInit(): void {
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.id = Number(params.get('id')); 
      this.serverService.getSchedule(this.id, 1).subscribe((x: Schedule)=>{
        this.data = x;
      })
      this.serverService.getProfessors().subscribe((a:Professor[])=>{
        this.professors = a;
      })
    });
  }

}
