import { WeekDay } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../interfaces/class';
import { Professor } from '../interfaces/professor';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-class-overview',
  templateUrl: './class-overview.component.html',
  styleUrls: ['./class-overview.component.css']
})
export class ClassOverviewComponent implements OnInit {
  @Input() data: Class[];
  @Input() profs: Professor[];
  // points: 

  constructor(private serverService: ServerService) { }
  
  ngOnInit(): void {
  }

  getWeekDay(day: number){
    return WeekDay[day];
  }

  getProfessor(index: number){
    let prof = this.profs.filter(i=> i.id == index)[0];
    return prof?.surname + " " + prof?.name;
  }
}
