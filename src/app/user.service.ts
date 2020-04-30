import { Injectable } from '@angular/core';

import { DisplayService } from './display.service';
import { CounterService } from './counter.service';

@Injectable()
export class UserService {
  newItem:string
  activeToInactiveCount: number = 0
  inactiveToActiveCount: number = 0
  constructor(private displayservice: DisplayService,private counterservice: CounterService) { }

  changeStateActive(evtData) {
    this.newItem = this.displayservice.inactiveUser[evtData]
    this.displayservice.activeUser.push(this.newItem)
    this.displayservice.inactiveUser.splice(evtData,1)
    this.inactiveToActiveCount++
    this.counterservice.logFunc('inactive to active',this.inactiveToActiveCount)
  }
  changeStateInactive(evtData) {
    this.newItem = this.displayservice.activeUser[evtData]
    this.displayservice.inactiveUser.push(this.newItem)
    this.displayservice.activeUser.splice(evtData,1)
    this.activeToInactiveCount++
    console.log('inside changeStateInactive ' +this.activeToInactiveCount)
  }

}