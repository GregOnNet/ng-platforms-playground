import { Component, Input } from '@angular/core';
import { Book } from '../models/book';
import { BookBus } from '../core/book.bus';

@Component({
  selector: 'tr-book-card',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.sass']
})
export class BookGridElementComponent {
  @Input() book: Book;

  constructor(private books: BookBus) {  }

  select() {
    this.books.propagate(this.book);
  }
}
