
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective implements OnInit {
  colorClass = '';

  @Input() count?:number;

  constructor(private elementref: ElementRef,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.defineColor();
    this.renderer.addClass(this.elementref.nativeElement, this.colorClass);
  }

  defineColor() {
    this.colorClass = this.colorSelection(this.count as number);
  }

  colorSelection(count:number) {
    if (count <= 19 && count >= 5) return 'yellow';
    if (count > 19) return 'green';
    if (count < 5) return 'red';
    return '';
  }

}
