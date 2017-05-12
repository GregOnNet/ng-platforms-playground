import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.sass']
})
export class BookCardComponent implements OnInit {

  @Input() book;

  constructor() { }

  ngOnInit() {
  }

}
