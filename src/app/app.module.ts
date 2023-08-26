import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgTinyUrlModule } from 'ng-tiny-url';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgTinyUrlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
