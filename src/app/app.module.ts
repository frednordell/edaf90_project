import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './start/start.component';
import { NollningComponent } from './nollning/nollning.component';
import { PluggComponent } from './plugg/plugg.component';
import { BoendeComponent } from './boende/boende.component';
import { TopBarComponent } from './top-bar/top-bar.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from'@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LinksSectionComponent } from './links-section/links-section.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { KlagaComponent } from './klaga/klaga.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NollningComponent,
    PluggComponent,
    BoendeComponent,
    TopBarComponent,
    LinksSectionComponent,
    LandingPageComponent,
    KlagaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
