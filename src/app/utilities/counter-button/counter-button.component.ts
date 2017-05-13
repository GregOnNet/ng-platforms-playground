import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button[counter-button]',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.sass']
})
export class CounterButtonComponent {
  @Input() count: number;
  @Output() clicked = new EventEmitter();
}
