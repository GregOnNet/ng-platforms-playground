## Einfache Komponenteninteraktion
- Book
  ```typescript
  export class Book {
    thumbnails: string[];
    description: string;
    rating = 0;

    constructor(
      public isbn: string,
      public title: string,
      public authors: string[],
      public price: number
    ) {}
  }
  ```

- BookGridElementComponent
  - ISBN
  - Thumbnail (https://dummyimage.com/180x250/333/fff&text=Buch)
  - Titel
  - Autoren
  - Preis

  ```html
  <div class="thumbnail">
    <img>
  </div>
  <div class="title"></div>
  <div class="authors"></div>
  <div class="price"></div>
  <div class="rating"></div>
  <div class="actions"></div>
  ```
  *HTML Sketch*

- BookGridComponent
  - Listenanzeige
  - Sortierung

## Komponentenvererbung

- BookListElementComponent

  ```html
  <div class="thumbnail">
    <img>
  </div>
  <div class="content">
    <div class="title"></div>
    <div class="authors"></div>
    <div class="price"></div>
    <div class="rating" ></div>
  </div>
  <div class="actions"></div>
  ```
  *HTML Sketch*

- BookListComponent
- ViewToggleComponent
- `*ngIf;else;` in AppComponent

## Refactoring

- BookRatingButton
- Custom Directive
  - (click.once)

  ```typescript
  this.unsubscribe = this
    .renderer
    .listen(this.element.nativeElement, 'click', event => {
      this.renderer.setAttribute(this.element.nativeElement, 
                                 'disabled',
                                 'true');
      this.clickOnce.emit(event);
      this.unsubscribe();
    });
  ```
  *Logik*

## Einfaches Formular

- BookAddFormComponent
  - Referenzvariablen  
  ```html
  ```

## Formular mit ngModel

- Validierung

  ```html
  <div class="form-group">
    <label for="book-add-title">ISBN</label>
    <label
      [class.invalid]="isbn.invalid && (isbn.dirty || isbn.touched)"
      for="book-add-isbn"
      class="tooltip tooltip-validation tooltip-top-left tooltip-md">
      <input
        [(ngModel)]="book.isbn"
        #isbn="ngModel"
        required
        id="book-add-isbn"
        type="text"
        name="isbn"
        class="form-control">
      <span class="tooltip-content">
        Bitte geben Sie eine ISBN an.
      </span>
    </label>
  </div>
  ```

- Form Reset

 ```html
 <form #bookForm="ngForm" (ngSubmit)="createNewBook(bookForm)">
 ```


## Service refaktorisieren

- BookService
  - erst mit reiner Liste
  - Dann mit `Observables`

## Suchkomponente mit RxJS

- Top-Navigation
  
  ```html
  <header class="header">
    <div class="branding">
      <a href="">
        <span class="title">{{ title }}</span>
      </a>
    </div>
    <!-- Platzhalter für innerHTML -->
    <ng-content></ng-content>
  </header>
  ```

- Search-Component

  ```html
  <form class="search">
    <label>
      <input
        (input)="queryChange.emit(searchQuery.value)"
        type="text"
        #searchQuery
        placeholder="Bücher suchen...">
    </label>
  </form>
  <div class="search-results">
    <div class="container">
      <tr-book-grid
        *ngIf="books$ | async as books; else searchResults;"
        [books]="books">
      </tr-book-grid>
    </div>
  </div>
  ```
  *Template*

  ```ts
  queryChange = new EventEmitter<string>();
  /* ... */
  this.queryChange
    .debounceTime(500)
    .distinctUntilChanged()
    .filter(query => query && query.length > 0)
    .subscribe(query => console.log(query));
  ```
  *Component*
