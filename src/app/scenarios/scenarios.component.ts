import { Component, OnInit } from '@angular/core';
import { Scenario } from './scenario.model';
import * as moment from 'moment';

@Component({
  selector: 'app-scenarios',
  templateUrl: './scenarios.component.html',
  styleUrls: ['./scenarios.component.css']
})
export class ScenariosComponent implements OnInit {

  scenarios: Scenario[] = [
    new Scenario("scenario 1"),
    new Scenario("scenario 2"),
    new Scenario("scenario 3"),
    new Scenario("scenario 4"),
    new Scenario("scenario 5"),
    new Scenario("scenario 6"),
    new Scenario("scenario 7"),
    new Scenario("scenario 8")
  ]

  stepColumns: string[] = []

  ngOnInit() {
  }

  clearAll() {
    this.stepColumns = []
    for (let scenario of this.scenarios) {
      for (let k in scenario.steps) {
        delete scenario.steps[k]
      }
    }
  }

  onUpdateParams(params:{months:number, issueDate:string, startDate:string, paymentDate:string}){

    this.clearAll()

    let forensics = moment(params.issueDate).add(1, 'days').format("YYYY-MM-DD")
    let monthEnd0 = moment(params.issueDate).endOf('month').format("YYYY-MM-DD")

    this.addStepColumn(params.issueDate)
    this.addStepColumn(forensics)
    this.addStepColumn(monthEnd0)

    for (let scenario of this.scenarios) {
      scenario.steps[params.issueDate] = "NB Issue"
      scenario.steps[forensics] = "FORENSICS"
      scenario.steps[monthEnd0] = "MONTH END"
    }

    for (let i=0;i<params.months;i++){
      let raisedAndAssumed: string = moment(params.startDate).add(i, 'months').format('YYYY-MM-DD')
      let raisedAndPaid: string = moment(params.paymentDate).add(i, 'months').format('YYYY-MM-DD')
      let monthEnd: string = moment(params.startDate).add(i, 'months').endOf('month').format('YYYY-MM-DD')
      this.addStepColumn(raisedAndAssumed)
      this.addStepColumn(raisedAndPaid)
      this.addStepColumn(monthEnd)
      for(let scenario of this.scenarios){
        scenario.steps[raisedAndAssumed]="R & A"
        scenario.steps[raisedAndPaid]="R & P"
        scenario.steps[monthEnd]="MONTH END"
      }
    }

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
