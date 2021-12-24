import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    constructor(
        private elementRef: ElementRef,
    ) {
    }

    isOpen = false

    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen
        if (this.isOpen)
            this.elementRef.nativeElement.classList.add('open')
        else
            this.elementRef.nativeElement.classList.remove('open')

    }

}