import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickOnceDirective } from './event-modifiers/click-once.directive';
import { CounterButtonComponent } from './counter-button/counter-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CounterButtonComponent,
    ClickOnceDirective
  ],
  exports: [
    CounterButtonComponent,
    ClickOnceDirective
  ]
})
export class UtilitiesModule { }
