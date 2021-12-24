import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = 'blue'
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = 'transparent'
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = 'pink'

}
