import { Component, OnInit, Input } from '@angular/core';
import { Scenario } from '../../../scenario.model'

@Component({
  selector: '[app-step-cell]',
  templateUrl: './step-cell.component.html',
  styleUrls: ['./step-cell.component.css']
})
export class StepCellComponent implements OnInit {

  @Input() scenario: Scenario
  @Input() stepColumn: string

  constructor() { }

  ngOnInit(): void {
  }

}
