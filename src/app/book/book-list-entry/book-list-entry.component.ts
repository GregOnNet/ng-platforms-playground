import { BookCardComponent } from '../book-grid-element/book-grid-element.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tr-book-list-entry',
  templateUrl: './book-list-entry.component.html',
  styleUrls: ['./book-list-entry.component.sass']
})
export class ListEntryComponent extends BookCardComponent { }
