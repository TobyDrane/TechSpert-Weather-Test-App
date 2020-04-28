import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { SingleWeatherData } from 'src/app/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Weather data object
  public weatherData: Observable<SingleWeatherData[]>;

  // Constructor creates api servce
  constructor(private apiService: ApiService) {
  }

  public ngOnInit(): void {
    this.weatherData = this.apiService.getCitiesData();
  }
}
