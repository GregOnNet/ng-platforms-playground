import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoadingIndicatorComponent } from './app-loading-indicator/app-loading-indicator.component';

import { LoadingRoutingModule } from './loading-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoadingRoutingModule
  ],
  declarations: [
    AppLoadingIndicatorComponent
  ],
  exports: [
    AppLoadingIndicatorComponent
  ],
})
export class LoadingModule { }
