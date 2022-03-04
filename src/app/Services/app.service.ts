import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Launches } from '../Model/launches';

// can be used in any components
@Injectable({
  providedIn: 'root'
})
export class AppService {

  private baseURL = "https://api.spacexdata.com/v4/launches";
  constructor(private httpClient: HttpClient) { }


  //return observable type any
  getAllLaunches(): Observable<Launches[]> {
    console.log("ça fonctionne dans le service : app.service.ts");
    return this.httpClient.get<Launches[]>(`${this.baseURL}`);
  }
  // get all launches from a rocket id
  getLaunchesByRocketId(id:String): Observable<any> {
    return this.httpClient.post<any>("https://api.spacexdata.com/v4/launches/query",{
      query: {
        rocket: id
      }
    }).pipe(map(res=>res.docs));
  }
}
