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

@Component({
  selector: 'app-calendar-schedule',
  templateUrl: './calendar-schedule.component.html',
  styleUrls: ['./calendar-schedule.component.css']
})
export class CalendarScheduleComponent implements OnInit{
  @Input() data: Class[];
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

  constructor() {
  }

  ngOnInit(){

  }

  ngOnChanges(changes: SimpleChanges): void {
    let prop = changes["data"].currentValue;
    if(prop != null && prop != undefined && prop.length>0){
      this.initGroups();
    }
    console.log(this.events)
  }

  initGroups(){
    console.log(this.viewDate)
    this.data.forEach((cl: Class, index)=>{
      cl.groups.forEach((gr:Group)=>{
        let start_hour: String = gr.start.split(":")[0]
        let start_min: String = gr.start.split(":")[1]
        let end_hour: String = gr.end.split(":")[0]
        let end_min: String = gr.end.split(":")[1]
        console.log(this.viewDate)
        console.log((gr.day-1)*24)
        console.log(start_hour)
        this.events = [
          ...this.events,
          <CalendarEvent>{
            title: cl.name,
            start: addMinutes(addHours(this.viewDate, (gr.day-1)*24 + +start_hour), +start_min),
            end: addMinutes(addHours(this.viewDate, (gr.day-1)*24 + +end_hour), +end_min),
            // color: colors.red,
          },
        ];
      })
    })
  }
  

}
