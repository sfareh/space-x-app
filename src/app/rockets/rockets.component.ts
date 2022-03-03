import { Component, OnInit } from '@angular/core';
import {Rocket} from "../Model/rocket";
import { RocketsService } from '../Services/rockets.service';

@Component({
  selector: 'app-rockets',
  templateUrl: './rockets.component.html',
  styleUrls: ['./rockets.component.css']
})
export class RocketsComponent implements OnInit {

  rockets: Rocket[];
  constructor(private rocketsService: RocketsService) { }

  ngOnInit(): void {
    this.loadRockets();
  }

  // Get rockets list
  private loadRockets() {
    return this.rocketsService.getRockets().subscribe(data => this.rockets = data);
  }
}
