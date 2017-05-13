import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'tr-rating-button',
  templateUrl: './rating-button.component.html',
  styleUrls: ['./rating-button.component.sass']
})
export class RatingButtonComponent {

  @Input() rating: number;
  @Output() increase = new EventEmitter<number>();
  @Output() decrease = new EventEmitter<number>();

  raiseIncrease() {
    this.increase.emit(this.rating + 1);
  }

  raiseDecrease() {
    this.decrease.emit(this.rating - 1);
  }
}
