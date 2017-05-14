import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BookRoutingModule } from './book.routing.module';
import { UtilitiesModule } from './../utilities/utilities.module';

import { BookGridComponent } from './book-grid/book-grid.component';
import { BookGridElementComponent } from './book-grid-element/book-grid-element.component';
import { BookListComponent } from './book-list/book-list.component';
import { ListEntryComponent } from './book-list-element/book-list-element.component';
import { ViewToggleComponent } from './book-view-toggle/book-view-toggle.component';
import { RatingButtonComponent } from './rating-button/rating-button.component';
import { BookAddFormComponent } from './book-add-form/book-add-form.component';
import { BookTopNavigationComponent } from './book-top-navigation/book-top-navigation.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';


import { BookService } from './core/book.service';
import { GoogleBooksService } from './core/google-books.service';
import { IsbnPipe } from './core/isbn-pipe/isbn.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,

    BookRoutingModule,
    UtilitiesModule
  ],
  declarations: [
    BookGridComponent,
    BookGridElementComponent,
    BookListComponent,
    ListEntryComponent,
    ViewToggleComponent,
    RatingButtonComponent,
    BookAddFormComponent,
    BookTopNavigationComponent,
    BookDashboardComponent,
    IsbnPipe
  ],
  exports: [
    BookGridComponent,
    BookListComponent,
    ViewToggleComponent,
    BookAddFormComponent,
    BookTopNavigationComponent
  ],
  providers: [BookService, GoogleBooksService]
})
export class BookModule { }
