import { Component } from '@angular/core';
import { ServerElement } from './server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [];
  newServerName = '';
  newServerContent = '';

  onAddServer() {

    this.serverElements.push(
      new ServerElement(
        'server',
        this.newServerName,
        this.newServerContent
      )
    );
  }

  onAddBlueprint() {
    this.serverElements.push(
      new ServerElement(
        'blueprint',
        this.newServerName,
        this.newServerContent
      ));
  }
}
