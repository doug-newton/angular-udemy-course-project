import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  onAddServer(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.addServerElement.emit(new ServerElement(
      'server',
      serverNameInput.value,
      serverContentInput.value
    ))
  }

  onAddBlueprint(serverNameInput: HTMLInputElement, serverContentInput: HTMLInputElement) {
    this.addServerElement.emit(new ServerElement(
      'blueprint',
      serverNameInput.value,
      serverContentInput.value
    ))
  }

}
