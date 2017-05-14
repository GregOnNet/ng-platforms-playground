import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BookService } from './../core/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'tr-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.sass']
})
export class BookDetailsComponent implements OnInit {
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.route
      .paramMap
      .switchMap(params =>  this.bookService.getByIsbn(params.get('isbn')))
      .subscribe(book =>  this.book = book);
  }
}
