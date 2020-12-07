import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  panelOpenState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
