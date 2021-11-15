import { Component, OnInit, Input } from '@angular/core';
import { Scene } from '../scene.model';

@Component({
  selector: 'app-json-display',
  templateUrl: './json-display.component.html',
  styleUrls: ['./json-display.component.css']
})
export class JsonDisplayComponent implements OnInit {

  @Input() scene: Scene

  constructor() { }

  ngOnInit(): void {
  }

  display(): string {
    return JSON.stringify(this.scene, null, 2)
  }

}
