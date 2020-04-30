import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, query: string): unknown {
    if (!value) {
      return value;
    }
    // No query just return values
    if (!query) {
      return value;
    }

    const searchQuery = query.toLowerCase();
    return value.filter((val) => {
      return val.name.toLowerCase().includes(searchQuery);
    });
  }
}
