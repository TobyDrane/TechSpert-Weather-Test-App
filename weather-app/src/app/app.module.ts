import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app/app.component';
import { TableComponent } from './components/table/table.component';
import { PaginatePipe } from './pipes/paginate/paginate.pipe';
import { PaginateComponent } from './paginate/paginate.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    PaginatePipe,
    PaginateComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
