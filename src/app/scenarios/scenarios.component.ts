import { Component, OnInit } from '@angular/core';
import { Scenario } from './scenario.model';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.css']
})
export class ScenariosComponent implements OnInit {

  scenarios: Scenario[] = [
    new Scenario("scenario 1", )
  ]

  stepColumns: string[] = []

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
    this.sortStepColumns()
  }

  onDeleteStepColumn(stepColumn:string) {
    this.deleteStepColumn(stepColumn)
    for (let scenario of this.scenarios) {
      delete scenario.steps[stepColumn]
    }
  }

  onRenameStepColumn(names:{oldName:string, newName:string}) {
    this.deleteStepColumn(names.oldName)
    this.addStepColumn(names.newName)
    for (let scenario of this.scenarios) {
      scenario.steps[names.newName] = scenario.steps[names.oldName]
      delete scenario.steps[names.oldName]
    }
  }

  private deleteStepColumn(stepColumn:string) {
    this.stepColumns = this.stepColumns.filter(column=>{
      return column !== stepColumn
    })
  }

  private sortStepColumns() {
    this.stepColumns = this.stepColumns.sort((a, b) => {
      if (a < b) return -1
      if (a > b) return 1
      return 0
    })
  }


}
