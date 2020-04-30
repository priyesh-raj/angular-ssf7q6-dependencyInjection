import { Injectable } from '@angular/core';

import { UserService } from './user.service';

@Injectable()
export class CounterService {

  constructor() { }
  logFunc(action:string,count:number,){
    console.log('Count of '+action+' : '+count)
  }

}