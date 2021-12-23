import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { ServerElement } from '../server-element.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() addServerElement: EventEmitter<ServerElement> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('serverNameInput') serverNameInput: ElementRef
  @ViewChild('serverContentInput') serverContentInput: ElementRef

  onAddServer() {
    this.addServerElement.emit(new ServerElement(
      'server',
      this.serverNameInput.nativeElement.value,
      this.serverContentInput.nativeElement.value
    ))
  }

  onAddBlueprint() {
    this.addServerElement.emit(new ServerElement(
      'blueprint',
      this.serverNameInput.nativeElement.value,
      this.serverContentInput.nativeElement.value
    ))
  }

}
