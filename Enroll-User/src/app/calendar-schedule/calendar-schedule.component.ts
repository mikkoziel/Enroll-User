import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../interfaces/class';

@Component({
  selector: 'app-calendar-schedule',
  templateUrl: './calendar-schedule.component.html',
  styleUrls: ['./calendar-schedule.component.css']
})
export class CalendarScheduleComponent implements OnInit {
  @Input() data: Class[];

  constructor() { }

  ngOnInit(): void {
  }

}
