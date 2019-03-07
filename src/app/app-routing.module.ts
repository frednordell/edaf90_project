import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoendeComponent } from './boende/boende.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'boende', component: BoendeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
