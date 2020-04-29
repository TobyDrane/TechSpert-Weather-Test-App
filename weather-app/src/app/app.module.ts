import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { TableComponent } from './components/table/table.component';
import { PaginatePipe } from './pipes/paginate/paginate.pipe';
import { PaginateComponent } from './components/paginate/paginate.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginatePipe,
    PaginateComponent,
    FilterPipe,
    FilterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
