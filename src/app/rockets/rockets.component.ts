import { Component, OnInit } from '@angular/core';
import { Rocket } from "../Model/rocket";
import { Launches } from "../Model/launches";
import { RocketsService } from '../Services/rockets.service';
import { AppService } from '../Services/app.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  rockets: Rocket[];
  constructor(private rocketsService: RocketsService, private appService: AppService) { }

  ngOnInit(): void {
    this.rockets = [];
    this.loadLaunchesRocket();
  }

  // Get rockets list
  private loadRockets() {
    return this.rocketsService.getRockets().subscribe(data => this.rockets = data);
  }
  // Get launches associated with rocket
  private loadLaunchesRocket() {
    return this.rocketsService.getRockets().subscribe(rocketsList => {
      // pass Array of Rockets Id to get launches associated
      rocketsList.map(rocket => this.appService.getLaunchesByRocketId(rocket.id).subscribe(launch => {
        rocket.launches = launch
        this.rockets.push(rocket);
      }));
    });
  }
}
