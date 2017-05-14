import { BookValidators } from './../core/validators/book.validators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Book } from '../models/book';

@Component({
  selector: 'tr-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.sass']
})
export class BookEditComponent implements OnInit {

  book: Book;
  editForm: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.book = this.route.snapshot.data['book'];

    this.editForm = new FormGroup({
      isbn: new FormControl(this.book.isbn, [Validators.required, BookValidators.isbn])
    });
  }

}
