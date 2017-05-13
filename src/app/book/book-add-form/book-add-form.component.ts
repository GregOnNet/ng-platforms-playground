import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

import { Book } from '../models/book';

@Component({
  selector: 'tr-book-add-form',
  templateUrl: './book-add-form.component.html',
  styleUrls: ['./book-add-form.component.sass']
})
export class BookAddFormComponent {
  @Output() create = new EventEmitter<Book>();

  book = new Book('', [], 0);

  createNewBook(form: NgForm) {
    this.create.emit(Object.assign({}, this.book));
    form.reset();
  }

  updateAuthors(authors: FormControl) {
    this.book.authors = authors.value.split(',');
  }
}
