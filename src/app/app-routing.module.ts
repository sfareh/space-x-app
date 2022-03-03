import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RocketsComponent } from './rockets/rockets.component';
import { CapsulesComponent } from './capsules/capsules.component';

const routes: Routes = [
    { path: 'rockets', component: RocketsComponent },
    { path: 'capsules', component: CapsulesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
