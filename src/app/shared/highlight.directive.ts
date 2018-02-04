///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[app-highlight]'
})
/** Highlight the attached element in gold */
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
