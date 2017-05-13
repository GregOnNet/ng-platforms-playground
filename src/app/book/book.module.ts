import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UtilitiesModule } from './../utilities/utilities.module';

import { BookGridComponent } from './book-grid/book-grid.component';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookListComponent } from './book-list/book-list.component';
import { ListEntryComponent } from './book-list-element/book-list-element.component';
import { ViewToggleComponent } from './book-view-toggle/book-view-toggle.component';
import { RatingButtonComponent } from './rating-button/rating-button.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';

import { BookService } from './core/book.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UtilitiesModule
  ],
  declarations: [
    BookGridComponent,
    BookGridElementComponent,
    BookListComponent,
    ListEntryComponent,
    ViewToggleComponent,
    RatingButtonComponent,
    BookAddFormComponent
  ],
  exports: [
    BookGridComponent,
    BookListComponent,
    ViewToggleComponent,
    BookAddFormComponent
  ],
  providers: [BookService]
})
export class BookModule { }
