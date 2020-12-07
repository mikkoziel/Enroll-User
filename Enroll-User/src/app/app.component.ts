import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Enroll-User';
  isMenuCollapsed = true;

  constructor(){

  }

  ngOnInit(): void {

  }
}
