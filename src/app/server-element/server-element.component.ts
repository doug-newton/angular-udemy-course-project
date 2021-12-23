import { Component, OnInit, Input, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
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

lifecycle hooks will be called appropriately regardless of whether
the component implements the corresponding interface

*/

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
      OnInit, 
      OnChanges, 
      DoCheck,
      AfterContentInit,
      AfterContentChecked,
      AfterViewInit,
      AfterViewChecked,
      OnDestroy
  {

  @Input() serverElementName: string

  constructor() {
    console.log('constructor called')
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called:', changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit called')
  }

  //  note that there's an extra change detection cycle when running ng serve

  ngDoCheck(): void {
    console.log('ngDoCheck called')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called')
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called')
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called')
  }

  ngOnDestroy(): void {
      console.log('ngOnDestroy called')
  }
}
