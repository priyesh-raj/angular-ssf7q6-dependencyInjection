import { Component, OnInit, Input } from '@angular/core';

import { DisplayService } from '../display.service'
import { UserService } from '../user.service'

@Component({
  selector: 'app-activeuser',
  templateUrl: './activeuser.component.html',
  styleUrls: ['./activeuser.component.css']
})
export class ActiveuserComponent implements OnInit {
  user: string[]
  
  constructor(private displayservice: DisplayService,private userservice: UserService) { }

  ngOnInit() {
    this.user = this.displayservice.showactiveUser()
  }

  changeState(i) {
    this.userservice.changeStateInactive(i)
  }

}