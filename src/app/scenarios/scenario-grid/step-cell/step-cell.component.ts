import { Component, OnInit, Input } from '@angular/core';
import { Scenario } from '../../../scenario.model'

@Component({
  selector: '[app-step-cell]',
  templateUrl: './step-cell.component.html',
  styleUrls: ['./step-cell.component.css'],
  host: {
    "(click)": "startEditing($event)"
  }
})
export class StepCellComponent implements OnInit {

  @Input() scenario: Scenario
  @Input() stepColumn: string

  stepContent: string = ''

  editing: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  startEditing() {
    if (!this.editing) {
      if (this.stepColumn in this.scenario.steps) {
        this.stepContent = this.scenario.steps[this.stepColumn]
      }
      this.editing = true;
    }
  }

  save() {
    if (this.editing) {
      if (this.stepContent !== '') {
        this.scenario.steps[this.stepColumn] = this.stepContent
      }
      this.editing = false;
    }
  }

}
