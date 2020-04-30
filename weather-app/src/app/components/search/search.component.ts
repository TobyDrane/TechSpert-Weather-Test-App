import { Component, Input } from '@angular/core';
import { Search } from 'src/app/types';

@Component({
  selector: 'app-search',
  template: `
    <div class="search">
      <p>Search City Name: </p>
      <input type="text" class="search-box" [(ngModel)]="search.query" />
    </div>
  `,
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Input()
  public search: Search;
}
