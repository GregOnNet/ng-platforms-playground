import { Injectable } from '@angular/core';

import { Book } from './../models/book';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class BookService {
  books = [
    new Book('4392923482', 'Aurelia', ['Rob Eisenberg'], 20),
    new Book('4392423423', 'Angular', ['Mîsko Hevery'], 30),
    new Book('1232131233', 'Vue', ['André Staltz'], 14.95)
  ];

  getAll(): Observable<Book[]> {
    return Observable.of(this.books);
  }

  getByIsbn(isbn: string): Observable<Book> {
    return Observable.of(this.books.find(book => book.isbn === isbn));
  }

  create(book: Book) {
    this.books.unshift(book);
  }
}
