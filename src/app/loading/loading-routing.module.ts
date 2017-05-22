import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLoadingIndicatorComponent } from './app-loading-indicator/app-loading-indicator.component';

const routes: Routes = [
  { path: 'loading', component: AppLoadingIndicatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingRoutingModule { }
