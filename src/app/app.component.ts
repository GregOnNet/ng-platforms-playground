import { Component } from '@angular/core';

import { ViewMode } from './book/book-view-toggle/view-mode';
import { Book } from './book/models/book';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  isGridEnabled = true;

  books = [
    new Book('Angular', ['Gregor Woiwode'], 20),
    new Book('Angular', ['Gregor Woiwode'], 30),
    new Book('Angular', ['Gregor Woiwode'], 14.95),
  ];

  addBookToList(book: Book) {
    this.books.unshift(book);
  }

  setViewMode(viewMode: ViewMode) {
    viewMode === ViewMode.Grid
      ? this.isGridEnabled = true
      : this.isGridEnabled = false;
  }
}
