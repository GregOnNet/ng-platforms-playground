import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ViewMode } from './view-mode';

@Component({
  selector: 'tr-view-toggle',
  templateUrl: './view-toggle.component.html',
  styleUrls: ['./view-toggle.component.sass']
})
export class ViewToggleComponent implements OnInit {

  viewMode = ViewMode;

  @Output() changed = new EventEmitter<ViewMode>();

  constructor() { }

  propagate(viewMode: ViewMode) {
    this.changed.emit(viewMode);
  }

  ngOnInit() {
  }

}
