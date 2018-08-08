import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from '../environments/environment.local';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { User } from './users';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }

  registerUsers(users): Observable<User[]> {
    return this.http.post<User[]>(environment.api_url + 'users/', users, httpOptions)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(err => [])
      );
  }

  getUsers() {
    let player_1 = new User(parseInt(localStorage.getItem('player_1_id')), localStorage.getItem('player_1_username'));
    let player_2 = new User(parseInt(localStorage.getItem('player_2_id')), localStorage.getItem('player_2_username'));
    return [player_1, player_2];
  }

  getResult(choices) {
    return this.http.post(environment.api_url + 'game/calculate_result/', choices, httpOptions)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(err => [])
      );
  }

  saveGame(result) {
    return this.http.post(environment.api_url + 'game/', result, httpOptions)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(err => [])
      );
  }

  getUsersResults(): Observable<any> {
    return this.http.get<any>(environment.api_url + 'game/results?limit=10&offset=10', httpOptions)
      .pipe(
        map(response => {
          return response.results;
        }),
        catchError(err => [])
      );
  }

  getUserResults(users): Observable<User[]> {
    return this.http.post<User[]>(environment.api_url + 'users/', users, httpOptions)
      .pipe(
        map(response => {
          return response;
        }),
        catchError(err => [])
      );
  }
}
