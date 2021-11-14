import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-scenario',
  templateUrl: './add-scenario.component.html',
  styleUrls: ['./add-scenario.component.css']
})
export class AddScenarioComponent implements OnInit {

  newScenarioName: string = ''

  @Output() addScenario: EventEmitter<string> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  onAddScenario() {
    this.addScenario.emit(this.newScenarioName)
    this.newScenarioName = ''
  }

}
