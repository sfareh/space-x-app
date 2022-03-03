import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {response} from "express";
import {Capsules} from "../Model/Capsules";
import {CapsulesService} from "../Services/Capsules.service";

@Component({
  selector: 'app-capsules',
  templateUrl: './capsules.component.html',
  styleUrls: ['./capsules.component.css']
})
export class CapsulesComponent implements OnInit {

  private url= 'https://api.spacexdata.com/v4/capsules';

   capsules: Capsules[];

  constructor(private capsuleservice: CapsulesService) {}



  ngOnInit(): void {
    this.getCapsules();
  }
  private getCapsules(){
     this.capsuleservice.getCapsulesList().subscribe(data => this.capsules = data)
  }
}
