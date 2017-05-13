import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Book } from '../models/book';

@Component({
  selector: 'tr-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.sass']
})
export class BookAddFormComponent {
  @Output() create = new EventEmitter<Book>();

  book = new Book('', [], 0);

  createNewBook() {
    this.create.emit(this.book);
    this.book = new Book('', [], 0);
  }

  updateAuthors(authors: FormControl) {
    this.book.authors = authors.value.split(',');
  }
}
