import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Book } from '../models/book';

@Injectable()
export class BookBus {
  stream = new Subject<Book>();

  propagate(book: Book) {
    this.stream.next(book);
  }
}
