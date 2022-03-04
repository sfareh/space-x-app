import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Rocket } from '../Model/rocket';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  // url of json data
  private apiURL = 'https://api.spacexdata.com/v4/rockets';
  constructor(private http: HttpClient) {}
  // setting content type
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // recuperate the data
  getRockets(): Observable<Rocket[]> {
    return this.http
      .get<Rocket[]>(this.apiURL)
      .pipe(retry(1), catchError(this.handleError));
  }
  // error handling
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // get client-side error
      errorMessage = error.error.message;
    } else {
      // get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // display error
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
