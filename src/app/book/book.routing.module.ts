import { RouterModule, Route } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Route[] = [
  { path: '', component: BookDashboardComponent, pathMatch: 'full' },
  { path: 'book/:isbn', component: BookDetailsComponent },
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
