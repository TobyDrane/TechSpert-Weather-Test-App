import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './components/app/app.component';
import { TableComponent } from './components/table/table.component';
import { PaginatePipe } from './pipes/paginate/paginate.pipe';
import { PaginateComponent } from './components/paginate/paginate.component';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { FilterComponent } from './components/filter/filter.component';
import { GraphComponent } from './components/graph/graph.component';
import { SearchPipe } from './pipes/search/search.pipe';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    TableComponent,
    PaginatePipe,
    PaginateComponent,
    FilterPipe,
    FilterComponent,
    SearchPipe,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
