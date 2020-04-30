import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleWeatherData } from 'src/app/types';
import { ChartType, ChartDataSets, ChartOptions, ChartData } from 'chart.js';

@Component({
  selector: 'app-graph',
  template: `
    <div class="graph">
      <h1>Weather Graph</h1>
      <canvas baseChart
        [datasets]="chartData"
        [chartType]="barChartType"
        [options]="barChartOptions"
        [labels]="barChartLabels"
      ></canvas>
    </div>
  `,
  styleUrls: ['./graph.component.scss'],
})
export class GraphComponent implements OnInit {
  @Input()
  public data: Observable<SingleWeatherData[]>;

  // The chart stuff
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';
  public barChartLabels = [];
  public chartData = [
    { data: [], label: 'Temperature' },
    { data: [], label: 'Overall Mean Temperature' },
  ];

  public ngOnInit(): void {
    this.data.subscribe(d => {
      let totalTemp = 0;
      d.forEach((city) => {
        this.chartData[0].data.push(city.main.temp);
        this.barChartLabels.push(city.name);
        totalTemp += city.main.temp;
      });
      // Now add mean
      const mean = totalTemp / d.length;
      this.chartData[1].data.push(mean);
    });
  }
}
