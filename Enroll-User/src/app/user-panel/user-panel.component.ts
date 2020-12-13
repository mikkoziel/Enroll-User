import { Component, OnInit, NgModule } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {
  panelOpenState: boolean = false;

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
  }

}
