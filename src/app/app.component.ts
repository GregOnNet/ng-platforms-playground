import { Component, OnInit } from '@angular/core';

import { ViewMode } from './book/book-view-toggle/view-mode';
import { Book } from './book/models/book';

import { BookService } from './book/core/book.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  isGridEnabled = true;
  books: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  addBookToList(book: Book) {
    this.bookService.create(book);
    this.books = this.bookService.getAll();
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
