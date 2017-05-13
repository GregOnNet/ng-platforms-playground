import { Injectable } from '@angular/core';

import { Book } from './../models/book';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class BookService {
  books = [
    new Book('Angular', ['Gregor Woiwode'], 20),
    new Book('Angular', ['Gregor Woiwode'], 30),
    new Book('Angular', ['Gregor Woiwode'], 14.95)
  ];

  getAll(): Observable<Book[]> {
    return Observable.of(this.books);
  }

  create(book: Book) {
    this.books.unshift(book);
  }
}
