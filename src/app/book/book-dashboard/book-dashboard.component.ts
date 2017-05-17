import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';
import { ViewMode } from '../book-view-toggle/view-mode';

import { BookService } from '../core/book.service';
import { BookBus } from '../core/book.bus';

@Component({
  selector: 'tr-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.sass']
})
export class BookDashboardComponent implements OnInit {
  title = 'app works!';
  isGridEnabled = true;
  books: Observable<Book[]>;

  constructor(
    private bookService: BookService,
    private bookBus: BookBus) { }

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
    this.bookBus.stream.subscribe(book =>
      this.addBookToList(book)
    );
  }
}
