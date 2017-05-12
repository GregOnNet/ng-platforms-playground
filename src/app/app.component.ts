import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  books = [
    { title: 'Angular', authors: 'Gregor Woiwode' },
    { title: 'Angular', authors: 'Gregor Woiwode' },
    { title: 'Angular', authors: 'Gregor Woiwode' }
  ];
}
