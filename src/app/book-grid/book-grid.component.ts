import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-grid',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-grid.component.sass']
})
export class BookGridComponent implements OnInit {

  @Input() books;

  constructor() {
  }

  ngOnInit() {
  }

}
