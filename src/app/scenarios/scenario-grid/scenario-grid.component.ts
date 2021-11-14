import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Scenario } from 'src/app/scenario.model';

@Component({
  selector: 'app-scenario-grid',
  templateUrl: './scenario-grid.component.html',
  styleUrls: ['./scenario-grid.component.css']
})
export class ScenarioGridComponent implements OnInit {

  @Input() scenarios: Scenario[] = []
  @Input() stepColumns: string[] = []
  @Output() deleteStepColumn: EventEmitter<string> = new EventEmitter
  @Output() renameStepColumn: EventEmitter<{oldName:string, newName:string}> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteStepColumn(stepColumn:string) {
    this.deleteStepColumn.emit(stepColumn)
  }

  onRenameStepColumn(names:{oldName:string, newName:string}) {
    this.renameStepColumn.emit(names)
  }

}
