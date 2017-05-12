import { Component } from '@angular/core';
import { ViewMode } from './book/book-view-toggle/view-mode';

@Component({
  selector: 'tr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  isGridEnabled = true;

  books = [
    { title: 'Angular', authors: 'Gregor Woiwode' },
    { title: 'Angular', authors: 'Gregor Woiwode' },
    { title: 'Angular', authors: 'Gregor Woiwode' }
  ];

  setViewMode(viewMode: ViewMode) {
    viewMode === ViewMode.Grid
      ? this.isGridEnabled = true
      : this.isGridEnabled = false;
  }
}
