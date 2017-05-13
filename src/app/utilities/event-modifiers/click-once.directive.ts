import { Directive, Output, EventEmitter, Renderer2, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[click.once]'
})
export class ClickOnceDirective implements OnInit {
  // tslint:disable-next-line:no-output-rename
  @Output('click.once') clickOnce = new EventEmitter();
  unsubscribe;

  constructor(private renderer: Renderer2, private element: ElementRef) { }

  ngOnInit(): void {
    this.unsubscribe = this.renderer.listen(this.element.nativeElement, 'click', event => {
      this.renderer.setAttribute(this.element.nativeElement, 'disabled', 'true');
      this.clickOnce.emit(event);
      this.unsubscribe();
    });
  }
}
