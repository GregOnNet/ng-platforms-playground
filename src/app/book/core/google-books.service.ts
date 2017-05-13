import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

import { Book } from '../models/book';

@Injectable()
export class GoogleBooksService {

  constructor(private http: Http) { }

  search(query: string) {
    return this.http
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .map(response => response.json())
      .map(result => result.items.map(b => {
        const book = new Book(b.volumeInfo.title, b.volumeInfo.authors, b.saleInfo.listPrice ? b.saleInfo.amount : null);

        book.thumbnails = [b.volumeInfo.imageLinks.thumbnail];
        book.rating = b.volumeInfo.averageRating ? b.volumeInfo.averageRating : 0;

        return book;
      }));
  }
}
