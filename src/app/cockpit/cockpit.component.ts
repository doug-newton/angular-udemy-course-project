import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServerElement } from '../server-element.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('addServerElementAlias') addServerElement: EventEmitter<ServerElement> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  newServerName = '';
  newServerContent = '';

  onAddServer() {
    this.addServerElement.emit(new ServerElement(
      'server',
      this.newServerName,
      this.newServerContent
    ))
  }

  onAddBlueprint() {
    this.addServerElement.emit(new ServerElement(
      'blueprint',
      this.newServerName,
      this.newServerContent
    ))
  }

}
