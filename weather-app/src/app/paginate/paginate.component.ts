import { Component, Input } from '@angular/core';
import { Pagnation } from '../types';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent {
  @Input()
  public pagnation: Pagnation;
  @Input()
  public dataLength: number;

  public setRows(rows: number): void {
    this.pagnation.rows = rows;
  }

  public changePage(by: number): void {
    // Some conditions to what we can't change the page by
    // 1. we can't be less than 1
    // 2. it's not perfect but there isn't anymore data
    if (
      (this.pagnation.currentPage === 1 && by < 0) ||
      ((this.dataLength < (this.pagnation.currentPage * this.pagnation.rows)) && by > 0)
    ) {
      return;
    }
    this.pagnation.currentPage += by;
  }
}
