import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Capsules} from "../Model/Capsules";

@Injectable({
  providedIn: 'root'
})

export class CapsulesService {

  private baseURL= 'https://api.spacexdata.com/v4/capsules';

  constructor(private httpClient:HttpClient) { }

  getCapsulesList():Observable<Capsules[]>{
    return this.httpClient.get<Capsules[]>(`${this.baseURL}`)
  }
}
