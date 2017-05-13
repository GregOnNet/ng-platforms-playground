import { Observable } from 'rxjs/Observable';
import { GoogleBooksService } from './../core/google-books.service';
import { Component, OnInit } from '@angular/core';

import { Book } from '../models/book';

@Component({
  selector: 'tr-book-top-navigation',
  templateUrl: './book-top-navigation.component.html',
  styleUrls: ['./book-top-navigation.component.sass']
})
export class BookTopNavigationComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private googleBooks: GoogleBooksService) { }

  ngOnInit() {
    this.books = this.googleBooks.search('harry potter');
  }

}
