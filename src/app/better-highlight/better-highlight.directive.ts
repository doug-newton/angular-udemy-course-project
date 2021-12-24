import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input('appBetterHighlight') colors: [string, string] = ['transparent','blue']

  constructor(
  ) { }

  ngOnInit(): void {
    this.backgroundColor = this.colors[0]
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.backgroundColor = this.colors[1]
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.backgroundColor = this.colors[0]
  }

  @HostBinding('style.backgroundColor') backgroundColor: string = this.colors[0]

}
