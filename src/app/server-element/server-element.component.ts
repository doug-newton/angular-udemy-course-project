import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { ServerElement } from '../server-element.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None // apply styles from this component globally (not inheritance)
  //  encapsulation: ViewEncapsulation.ShadowDom // use native browser for default angular behaviour (not all support this)
  //  encapsulation: ViewEncapsulation.Emulated // default angular behaviour
})
export class ServerElementComponent implements OnInit {

  @Input() serverElement: ServerElement

  constructor() { }

  ngOnInit(): void {
  }

}
