import { BookCardComponent } from '../book-card/book-card.component';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'tr-book-list-entry',
  templateUrl: './book-list-entry.component.html',
  styleUrls: ['./book-list-entry.component.sass']
})
export class ListEntryComponent extends BookCardComponent { }
