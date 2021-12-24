import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {

    constructor() { }

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen
    }

    @HostBinding('class.open') isOpen: boolean = false

}