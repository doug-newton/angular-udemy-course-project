import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    constructor(
        private elementRef: ElementRef,
    ) {
    }

    toggled = false

    @HostListener('click') onClick(eventData: Event) {
        this.toggled = !this.toggled
        if (this.toggled)
            this.elementRef.nativeElement.classList.add('open')
        else
            this.elementRef.nativeElement.classList.remove('open')

    }

}