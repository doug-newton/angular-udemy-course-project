import { Component, OnInit } from '@angular/core';
import { Scenario } from './scenario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newScenarioName: string = ''
  newStepColumn: string = ''

  scenarios: Scenario[] = [
    new Scenario("SC-1-1", {'step 2':'pay','step 3':'cancel'})
  ]

  stepColumns: string[] = ['step 1','step 2','step 3']

  ngOnInit() {
  }

  addScenario(){
    if (this.newScenarioName === '') return
    this.scenarios.push(new Scenario(this.newScenarioName))
    this.newScenarioName = ''
  }

  addStepColumn() {
    if (this.newStepColumn === '') return
    this.stepColumns.push(this.newStepColumn)
    this.stepColumns = Array.from(new Set(this.stepColumns))
    this.newStepColumn = ''
  }
}
