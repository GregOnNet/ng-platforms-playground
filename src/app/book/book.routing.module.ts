import { BookResolver } from './core/resolvers/book.resolver';
import { RouterModule, Route } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Route[] = [
  { path: '', component: BookDashboardComponent, pathMatch: 'full' },
  { path: 'book/:isbn', component: BookDetailsComponent, resolve: { book: BookResolver } },
  { path: 'book/:isbn/edit', component: BookEditComponent, resolve: { book: BookResolver } },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookRoutingModule { }
