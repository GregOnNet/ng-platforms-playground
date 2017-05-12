import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tr-book-card',
  templateUrl: './book-grid-element.component.html',
  styleUrls: ['./book-grid-element.component.sass']
})
export class BookCardComponent implements OnInit {

  @Input() book;

  constructor() { }

  ngOnInit() {
  }

}
