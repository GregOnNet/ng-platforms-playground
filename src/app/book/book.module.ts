import { UtilitiesModule } from './../utilities/utilities.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookGridComponent } from './book-grid/book-grid.component';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookListComponent } from './book-list/book-list.component';
import { ListEntryComponent } from './book-list-element/book-list-element.component';
import { ViewToggleComponent } from './book-view-toggle/book-view-toggle.component';
import { RatingButtonComponent } from './rating-button/rating-button.component';


@NgModule({
  imports: [
    CommonModule,
    UtilitiesModule
  ],
  declarations: [
    BookGridComponent,
    BookGridElementComponent,
    BookListComponent,
    ListEntryComponent,
    ViewToggleComponent,
    RatingButtonComponent
  ],
  exports: [
    BookGridComponent,
    BookListComponent,
    ViewToggleComponent
  ]
})
export class BookModule { }
