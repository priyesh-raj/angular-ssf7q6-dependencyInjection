import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ActiveuserComponent } from './activeuser/activeuser.component';
import { InactiveuserComponent } from './inactiveuser/inactiveuser.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ActiveuserComponent, InactiveuserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
