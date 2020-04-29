import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any, order: string = '', column: string = ''): unknown {
    // No value or no filter or only one value
    if (!value || !order || value.length <= 1) {
      return value;
    }
    if (!column) {
      if (order === 'asc') {
        return value.sort();
      } else {
        // equiv of desc
        return value.sort().reverse();
      }
    }
    // loadsh orderBy
    // yes this isn't pretty we have nested props and unested props
    // hardcoded way like such isn't great but.. it'll do
    if (column === 'temp') {
      return orderBy(value, 'main.temp', [order]);
    }
    return orderBy(value, [column], [order]);
  }
}
