import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WikiumModule } from './modules/wikium/wikium.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WikiumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
