import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {
  transform(value: any, rows?: number, currentPage?: number): unknown {
    // Stops null error we get at the start due to async JS
    if (!value || (!rows && !currentPage)) {
      return value;
    }
    const start = currentPage === 1 ? 0 : rows * (currentPage - 1);
    const end = rows * currentPage;
    return value.slice(start, end);
  }
}
