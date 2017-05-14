import { GoogleBooksService } from './../core/google-books.service';
import { Component, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Book } from '../models/book';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'tr-book-top-navigation',
  templateUrl: './book-top-navigation.component.html',
  styleUrls: ['./book-top-navigation.component.sass']
})
export class BookTopNavigationComponent {
  searchError: string;
  isResultViewEnabled = false;

  books$: Observable<Book[]>;
  queryChange = new EventEmitter<string>();

  constructor(private googleBooks: GoogleBooksService) {
    this.books$ = this.queryChange
      .debounceTime(500)
      .distinctUntilChanged()
      .filter(query => query && query.length > 0)
      .do(() => this.isResultViewEnabled = true)
      .switchMap(query => this.googleBooks.search(query))
      .catch(err => {
        this.searchError = err.message;
        return Observable.of([]);
      });
  }
}
