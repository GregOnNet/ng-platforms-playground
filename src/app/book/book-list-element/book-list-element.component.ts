import { BookGridElementComponent } from '../book-grid-element/book-grid-element.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tr-book-list-element',
  templateUrl: './book-list-element.component.html',
  styleUrls: ['./book-list-element.component.sass']
})
export class ListEntryComponent extends BookGridElementComponent { }
