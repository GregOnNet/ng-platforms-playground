import { Component, OnInit } from '@angular/core';

import { ViewMode } from './book/book-view-toggle/view-mode';
import { Book } from './book/models/book';

import { BookService } from './book/core/book.service';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  isGridEnabled = true;
  books: Book[];

  constructor(private bookService: BookService) { }

  addBookToList(book: Book) {
    this.books.unshift(book);
  }

  setViewMode(viewMode: ViewMode) {
    viewMode === ViewMode.Grid
      ? this.isGridEnabled = true
      : this.isGridEnabled = false;
  }

  ngOnInit(): void {
    this.books = this.bookService.getAll();
  }
}
