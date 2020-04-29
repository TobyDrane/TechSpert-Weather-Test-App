import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {
  transform(value: any, rows: number, currentPage: number): unknown {
    // Stops null error we get at the start due to async JS
    if (!value) {
      return value;
    }
    const start = 0;
    const end = rows * currentPage;
    return value.slice(start, end);
  }
}
