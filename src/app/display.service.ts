import { Injectable } from '@angular/core';

@Injectable()
export class DisplayService {
  activeUser:string[] = ['Max','Charles']
  inactiveUser: string[] = ['Alonso','Michael']

  constructor() { }

  showactiveUser(){
    return this.activeUser
  }
  showinactiveUser() {
    return this.inactiveUser
  }
}