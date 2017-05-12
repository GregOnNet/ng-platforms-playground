import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookGridComponent } from './book-grid/book-grid.component';
import { BookCardComponent } from './book-grid-element/book-grid-element.component';
import { BookListComponent } from './book-list/book-list.component';
import { ListEntryComponent } from './book-list-entry/book-list-entry.component';
import { ViewToggleComponent } from './book-view-toggle/book-view-toggle.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BookGridComponent,
    BookCardComponent,
    BookListComponent,
    ListEntryComponent,
    ViewToggleComponent
  ],
  exports: [
    BookGridComponent,
    BookListComponent,
    ViewToggleComponent
  ]
})
export class BookModule { }
