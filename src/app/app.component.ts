import { Component } from '@angular/core';
import { ServerElement } from './server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements: ServerElement[] = [];

  onAddServerElement($event: ServerElement) {
    this.serverElements.push($event)
  }

}
