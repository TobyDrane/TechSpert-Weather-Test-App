import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

import {
  SingleWeatherData,
  WeatherResponse,
} from '../types';

const API_KEY = '194333f5b09188fbda8c4a3bbfea30b2';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {
    // Unused
  }

  // Get open weather map data -> we fetch 10 cities from the lat and lang coords
  // function returns observable of an array of single weather data types
  public getCitiesData(): Observable<SingleWeatherData[]> {
    return this.httpClient.get<WeatherResponse>(`http://api.openweathermap.org/data/2.5/find?lat=52.399448&lon=0.259790&cnt=10&appid=${API_KEY}`)
      .pipe(map(response => response.list));
  }
}
