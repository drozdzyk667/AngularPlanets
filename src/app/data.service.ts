import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Planet } from './planet.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiURL = 'https://swapi.co/api/planets/';

  constructor(private http: HttpClient) { }

    getPlanets() {
      return this.http.get<Planet[]>(this.apiURL);
    }


}
