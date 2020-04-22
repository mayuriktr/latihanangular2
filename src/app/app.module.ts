import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HalamaninputComponent } from './halamaninput/halamaninput.component';
import { HalamanlistComponent } from './halamanlist/halamanlist.component';
import { HalamaneditComponent } from './halamanedit/halamanedit.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HalamaninputComponent, HalamanlistComponent, HalamaneditComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
