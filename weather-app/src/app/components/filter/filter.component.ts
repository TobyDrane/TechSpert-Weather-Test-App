import { Component, Input } from '@angular/core';
import { Filter } from 'src/app/types';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  @Input()
  public filter: Filter;

  public changeFilter(e): void {
    this.filter.column = e;
  }

  public changeOrder(e): void {
    this.filter.order = e;
  }
}
