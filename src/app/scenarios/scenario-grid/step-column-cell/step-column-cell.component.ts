import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-step-column-cell]',
  templateUrl: './step-column-cell.component.html',
  styleUrls: ['./step-column-cell.component.css']
})
export class StepColumnCellComponent implements OnInit {

  @Input() stepColumn: string = ''
  @Output() deleteStepColumn: EventEmitter<string> = new EventEmitter
  @Output() renameStepColumn: EventEmitter<{oldName:string,newName:string}> = new EventEmitter

  deleteButtonVisible: boolean = false

  newStepColumn: string = ''
  editing: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteStepColumn() {
    this.deleteStepColumn.emit(this.stepColumn)
  }

  showDeleteButton() {
    this.deleteButtonVisible = true
  }

  hideDeleteButton() {
    this.deleteButtonVisible = false
  }

  startEditing() {
    this.editing = true
    this.newStepColumn = this.stepColumn
  }

  save() {
    this.renameStepColumn.emit({
      oldName: this.stepColumn,
      newName: this.newStepColumn
    })
    this.editing = false
  }

}
