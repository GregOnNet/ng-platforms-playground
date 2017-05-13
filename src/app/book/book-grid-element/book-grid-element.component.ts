import { Component, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'tr-book-card',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.sass']
})
export class BookGridElementComponent {
  @Input() book: Book;

  canDerive() { console.log('Yes'); }
}
