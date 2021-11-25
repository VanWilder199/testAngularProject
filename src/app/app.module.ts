import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ListPageComponent} from "./list-page/page/list-page.component";
import { ListNavigationComponent } from './list-page/components/list-navigation/list-navigation.component';
import { ListTableComponent } from './list-page/components/list-table/list-table.component';
import {RouterModule} from "@angular/router";
import { HttpClientModule} from "@angular/common/http";
import { FilterByQueryPipe } from './shared/pipes/filter-by-query.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListPageComponent,
    ListNavigationComponent,
    ListTableComponent,
    FilterByQueryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
