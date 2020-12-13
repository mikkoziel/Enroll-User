import { WeekDay } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../interfaces/class';

@Component({
  selector: 'app-class-overview',
  templateUrl: './class-overview.component.html',
  styleUrls: ['./class-overview.component.css']
})
export class ClassOverviewComponent implements OnInit {
  @Input() data: Class[];

  constructor() { }
  ngOnInit(): void {
  }

  getWeekDay(day: number){
    return WeekDay[day];
  }

}
