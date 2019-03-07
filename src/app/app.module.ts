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
import { TriIconsComponent } from './tri-icons/tri-icons.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';

import { AgmCoreModule } from '@agm/core';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from'@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LinksSectionComponent } from './links-section/links-section.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { KlagaComponent } from './klaga/klaga.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InternationalComponent } from './international/international.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    NollningComponent,
    PluggComponent,
    BoendeComponent,
    TriIconsComponent,
    TopBarComponent,
    TopBarComponent,
    LinksSectionComponent,
    LandingPageComponent,
    KlagaComponent,
    FooterComponent,
    InternationalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    LayoutModule,
    MatChipsModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCyC93bo2IxBifjOMWrgDR_wSQKm5lGG0M'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
