import { Component, ViewEncapsulation } from '@angular/core';
import { ServerElement } from './server-element.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements: ServerElement[] = [
    new ServerElement('server', 'First Server', '$> echo hello world')
  ];

  onAddServerElement($event: ServerElement) {
    this.serverElements.push($event)
  }

  onChangeFirst() {
    this.serverElements[0].name = "Changed Name"
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1)
  }

}
