import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleWeatherData } from 'src/app/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input()
  public data: Observable<SingleWeatherData[]>;

  public ngOnInit(): void {
    this.data.subscribe((d) => {
      console.log(d);
    });
  }
}
