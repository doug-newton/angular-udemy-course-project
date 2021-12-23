import { Component, OnInit, Input } from '@angular/core';
import { ServerElement } from '../server-element.model';

/*

Lifecycle Hooks

ngOnChanges - called after a bound input property changes
ngOnInit - called once the component is initialised, before being displayed/added to the DOM. runs after the constructor
ngDoCheck - called every change detection cycle run: when angular checks, not only when something does actually need to change
ngAfterContentInit - called after content (ng-content) has been projected into the view
ngAfterContentChecked - called after ng-content has been checked
ngAfterViewInit - called after the component's view (and child views) has been initialised
ngAfterViewChecked - called after the view and child views have been checked
ngOnDestroy - called once the component is about to be destroyed / removed from the DOM

*/

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input() serverElement: ServerElement

  constructor() { }

  ngOnInit(): void {
  }

}
