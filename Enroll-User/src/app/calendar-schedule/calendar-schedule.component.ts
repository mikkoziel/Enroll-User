import {
  Input,
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  TemplateRef,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Time, WeekDay } from '@angular/common';
import { CalendarEvent, CalendarView, DAYS_OF_WEEK } from 'angular-calendar';
import { addMinutes, addHours, endOfDay, startOfDay } from 'date-fns';

import { Class } from '../interfaces/class';
import { Group } from '../interfaces/group';
import { Professor } from '../interfaces/professor';
import { ServerService } from '../services/server.service';
import { UserPreference } from '../interfaces/user-preference';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-calendar-schedule',
  templateUrl: './calendar-schedule.component.html',
  styleUrls: ['./calendar-schedule.component.css']
})
export class CalendarScheduleComponent implements OnInit{
  @Input() data: Class[];
  @Input() profs: Professor[];
  ups: UserPreference[] = undefined;
  currentUser: User;
  
  view: CalendarView = CalendarView.Week;
  viewDate: Date = new Date('2016-01-04 00:00');
  dayStartHour: number = 8;
  dayEndHour: number = 22;
  tooltipTemplate:  TemplateRef<any>;

  events: CalendarEvent[] = [
    // {
    //   start: new Date('2016-01-08'),
    //   end: new Date('2016-01-10'),
    //   title: 'One day excluded event',
    //   // color: colors.red,
    //   allDay: true,
    // },
    // {
    //   start: new Date('2016-01-01'),
    //   end: new Date('2016-01-09'),
    //   title: 'Multiple weeks event',
    //   allDay: true,
    // },
  ];

  excludeDays: number[] = [0, 6];
  weekStartsOn = DAYS_OF_WEEK.MONDAY;
  CalendarView = CalendarView;

  constructor(private serverService: ServerService) {
  }

  ngOnInit(){
    // console.log(this.ups)
    // console.log(this.data)
    // console.log(this.events)
    // console.log(this.profs)
    this.currentUser = <User> {id: 1};
    this.serverService.getUPForUser(this.currentUser.id).subscribe((x: UserPreference[])=>{
      this.ups = x;
    })
  }

  waitForVars(){
    let ups = this.ups!=undefined;
    let data = this.data!=null 
    let events = this.events!=[]
    let profs = this.profs!=undefined
    // console.log(ups)
    // console.log(data)
    // console.log(events)
    // console.log(profs)
    return  ups && 
            data && 
            events && 
            profs;
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.waitForVars())
    let prop_data = changes["data"]?.currentValue;
    if(prop_data != null && prop_data != undefined && prop_data.length>0){
      this.initGroups();
    }
    
    // console.log(this.waitForVars())
  }

  initGroups(){
    this.data.forEach((cl: Class, index)=>{
      cl.groups.forEach((gr:Group)=>{
        let start_hour: String = gr.start.split(":")[0]
        let start_min: String = gr.start.split(":")[1]
        let end_hour: String = gr.end.split(":")[0]
        let end_min: String = gr.end.split(":")[1]
        this.events = [
          ...this.events,
          <CalendarEvent>{
            title: cl.name,
            start: addMinutes(addHours(this.viewDate, (gr.day-1)*24 + +start_hour), +start_min),
            end: addMinutes(addHours(this.viewDate, (gr.day-1)*24 + +end_hour), +end_min),
            // color: colors.red,
            meta:{group: gr, class: cl}
          },
        ];
      })
    })
  }

  getUP(group_id: number){
    let up = this.ups.filter(i=> i.group_id == group_id && i.user_id == this.currentUser.id)[0];
    return up != undefined ? up.points : 0;
  }
  
  getProfessor(index: number){
    let prof = this.profs.filter(i=> i.id == index)[0];
    return prof != undefined ? prof.surname + " " + prof.name : "";
  }

}
