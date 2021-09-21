import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStars]',
})
export class StarsDirective implements OnInit  {
  @Input() number?:number;

  constructor(private elementref: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementref.nativeElement, 'width', `${(this.number as number) * 16}px`);
  }
}
