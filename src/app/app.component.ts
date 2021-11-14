import { Component, OnInit } from '@angular/core';
import { Scenario } from './scenario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  scenarios: Scenario[] = [
    new Scenario("SC-1-1", {'step 2':'pay','step 3':'cancel'})
  ]

  stepColumns: string[] = ['step 1','step 2','step 3']

  ngOnInit() {
  }

  addScenario(name:string){
    if (name === '') return
    this.scenarios.push(new Scenario(name))
  }

  addStepColumn(name:string) {
    if (name === '') return
    this.stepColumns.push(name)
    this.stepColumns = Array.from(new Set(this.stepColumns))
  }
}
