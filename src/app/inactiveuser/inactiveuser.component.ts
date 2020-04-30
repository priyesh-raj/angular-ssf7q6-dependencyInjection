import { Component, OnInit } from '@angular/core';

import { DisplayService } from '../display.service'
@Component({
  selector: 'app-inactiveuser',
  templateUrl: './inactiveuser.component.html',
  styleUrls: ['./inactiveuser.component.css']
})
export class InactiveuserComponent implements OnInit {
  user: string[]
  constructor(private displayservice: DisplayService) { }

  ngOnInit() {
    this.user = this.displayservice.showinactiveUser()
  }

}