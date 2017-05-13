import { Injectable } from '@angular/core';

import { Book } from './../models/book';

@Injectable()
export class BookService {

  constructor() { }

  getAll() {
    return [
      new Book('Angular', ['Gregor Woiwode'], 20),
      new Book('Angular', ['Gregor Woiwode'], 30),
      new Book('Angular', ['Gregor Woiwode'], 14.95),
    ];
  }

}
