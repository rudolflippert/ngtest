import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ChangeDetectorRef } from '@angular/core';

import { AppComponent } from './app.component';
import { AsyncPipe } from '@angular/common';
import { DelayPipe } from './pipes/delay.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DelayPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [DelayPipe]
})
export class AppModule { }
