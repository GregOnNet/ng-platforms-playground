import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tr-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass']
})
export class BookListComponent implements OnInit {

  @Input() books;

  constructor() { }

  ngOnInit() {
  }

}
