import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { BookService } from './../book.service';

import { Book } from '../../models/book';

@Injectable()
export class BookResolver implements Resolve<Book> {

  constructor(public bookService: BookService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> {
    return this.bookService.getByIsbn(route.paramMap.get('isbn'));
  }

}
