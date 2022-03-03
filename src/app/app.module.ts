import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesComponent } from './launches/launches.component';
import { CapsulesComponent } from './capsules/capsules.component';

import {HttpClientModule} from "@angular/common/http";
import { RocketsComponent } from './rockets/rockets.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchesComponent,
    CapsulesComponent,
    RocketsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
