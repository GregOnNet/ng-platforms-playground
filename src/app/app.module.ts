import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BookCardComponent } from './book-card/book-card.component';
import { BookGridComponent } from './book-grid/book-grid.component';
import { BookListComponent } from './book-list/book-list.component';
import { ListEntryComponent } from './book-list-entry/book-list-entry.component';
import { ViewToggleComponent } from './view-toggle/view-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    BookCardComponent,
    BookGridComponent,
    BookListComponent,
    ListEntryComponent,
    ViewToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
