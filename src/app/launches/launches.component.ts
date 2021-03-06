import { Component, OnInit } from '@angular/core';
import { AppService } from '../Services/app.service';
import { Launches } from '../Model/launches';
import { Rocket } from '../Model/rocket';
import { RocketsService } from '../Services/rockets.service';
declare const startsWith: Function;

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  // too much data from api - I only show the last 10 years of space-x launches
  launchYears = ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
  // model
  launchDataArray: Launches[];
  rockets : Rocket[];
  //to filter by date
  launchDataArrayBis : any;
  // index
  launchYearSelectedIndex = -1;
  //data loading or not
  isLoading = false;
  //to show clear btn or not
  showFilter = false;

  // import the app service
  constructor(private appService: AppService, private rocketsService: RocketsService) { }

  ngOnInit(): void {
    // init data
    this.getLaunches();
    this.loadRockets();
    console.log("init launches.component.ts");
  }

  // fetch data
  private getLaunches(){
    //data loading
    this.isLoading = true;
    // subscribe to observable
    this.appService.getAllLaunches().subscribe(response => this.launchDataArray = response);
      this.isLoading = false;

  }

  // apply the filter to get launches per year
  filterLaunchPrograms(index: number, year: string){
    // clear previous data
    this.clearFilter();
    for(let i = 0; i < this.launchDataArray.length; i++){
      let launchRocketId = this.launchDataArray[i]["rocket"];

      for(let i = 0; i < this.rockets.length; i++){
        let rocketObjectId = this.rockets[i]["id"].toString();
        let rocketObjectName = this.rockets[i]["name"].toString();
        console.log("rocket Objet name : " + rocketObjectName);
        console.log("rocket Objet id : " + rocketObjectId);
        console.log("launche rocket id : " + launchRocketId);
        // check if date matches
       if(new RegExp(launchRocketId).test(rocketObjectId)){
        // change rocket :id -> rocket:name
        console.log("test fonctionne id rocket");
        this.launchDataArray[i].rocket= rocketObjectName;
        console.log( this.launchDataArray);
        break;
      }
    }
    }


    // iterate on response to only display launches date = year
    for(let i = 0; i < this.launchDataArray.length; i++){
      // get current object date
      let str = this.launchDataArray[i]["date_local"];

     // check if date matches
     if(new RegExp('^' + year).test(str)){
      // it matches -> store in new array
      this.launchDataArrayBis.push(this.launchDataArray[i]);
      console.log( this.launchDataArrayBis);
    }
}   // index of launchYears array
    this.launchYearSelectedIndex = index;
    // if data displayed clear btn show
    this.showFilter = true;
  }

  // clear data
  clearFilter(): void {
    // reset array
    this.launchDataArrayBis = [];
    // hide btn
    this.showFilter = false;
  }

  // Get rockets list
  private loadRockets() {
    return this.rocketsService.getRockets().subscribe(data => this.rockets = data);
  }

}
