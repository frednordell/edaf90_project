import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NollningComponent } from './nollning/nollning.component';
import { PluggComponent } from './plugg/plugg.component';
import { BoendeComponent } from './boende/boende.component';

@NgModule({
  declarations: [
    AppComponent,
    NollningComponent,
    PluggComponent,
    BoendeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
