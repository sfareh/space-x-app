import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import { CapsulesComponent } from './capsules/capsules.component';
import { RocketsComponent } from './rockets/rockets.component';
import { LaunchDetailsCardComponent } from './launch-details-card/launch-details-card.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    CapsulesComponent,
    RocketsComponent,
    LaunchDetailsCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
