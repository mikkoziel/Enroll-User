import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Professor } from '../interfaces/professor';
import { Schedule } from '../interfaces/schedule';
import { User } from '../interfaces/user';
import { UserPreference } from '../interfaces/user-preference';
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
  sub: Subscription;  

  data: any;
  currentUser: User;
  
  constructor(private _Activatedroute:ActivatedRoute,
    private serverService: ServerService) { 
   }

  ngOnInit(): void {
    this.currentUser = <User> {id: 1};
    this.sub=this._Activatedroute.paramMap.subscribe(params => { 
      this.id = Number(params.get('id')); 
      this.serverService.getCombine(this.currentUser.id, this.id)
        .subscribe((a:any)=>{
            console.log(a)
              this.data = a;
        })
    });
  }

}
