import { Component, OnInit } from '@angular/core';

import { DisplayService } from './display.service'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  //providers: [ DisplayService ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  activeUsers: string[] = []
  inactiveUsers: string[] = []
  constructor(private displayService : DisplayService) {}

  ngOnInit() {
    this.activeUsers = this.displayService.showactiveUser()
    this.inactiveUsers = this.displayService.showinactiveUser()
  }
  
}
