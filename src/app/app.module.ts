import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

import { PaginatePipe } from './pagination/paginate.pipe';
import { PaginationService } from './pagination/paginate.service';
import { PaginationControlsComponent } from './pagination/pagination-control.component';


import {
  NglPick,
  NglPickOption,

  NglDropdown,
  NglDropdownTrigger,
  NglDropdownItem,

  NglPicklist,
  NglPicklistItemTemplate
} from './multiselect';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,

    PaginatePipe,
    PaginationControlsComponent,

    NglPick,
    NglPickOption,

    NglDropdown,
    NglDropdownTrigger,
    NglDropdownItem,

    NglPicklist,
    NglPicklistItemTemplate
  ],
  providers: [
    ApiService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
