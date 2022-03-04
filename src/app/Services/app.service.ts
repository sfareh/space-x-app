import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launches } from '../Model/launches';

// can be used in any components
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private  baseURL = "https://api.spacexdata.com/v4/launches";
  constructor(private httpClient: HttpClient) { }


  //return observable type any
 getAllLaunches():Observable<Launches[]> {
   console.log("ça fonctionne dans le service : app.service.ts");
   return this.httpClient.get<Launches[]>(`${this.baseURL}`);
}
}
