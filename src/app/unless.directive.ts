import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/*
this is the opposite of an *ngIf
*/

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //  'set' is TypeScript shorthand for setter of property
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef)
    }
    else {
      this.vcRef.clear()
    }
  }

  constructor(
    /*
    the star syntax will wrap the element in an <ng-template>.
    therefore inject a TemplateRef instead of an ElementRef.
    */
    private templateRef: TemplateRef<any>,
    /*
    this is the location in the DOM where the <ng-template> will be rendered.
    you can see this using the dev tools.
    */
    private vcRef: ViewContainerRef
  ) { }

}
