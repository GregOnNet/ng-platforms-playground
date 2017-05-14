import { RouterModule, Route } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';

const routes: Route[] = [
  { path: '', component: BookDashboardComponent, pathMatch: 'full' }
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
