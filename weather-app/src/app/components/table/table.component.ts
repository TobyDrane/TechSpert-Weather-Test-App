import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleWeatherData, Pagnation } from 'src/app/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  public data: Observable<SingleWeatherData[]>;

  public dataLength: number;

  public pagnation: Pagnation = {
    rows: 5,
    currentPage: 1,
  };

  public ngOnInit(): void {
    this.data.subscribe(d => this.dataLength = d.length);
  }
}
