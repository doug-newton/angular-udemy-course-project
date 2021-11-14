import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: '[app-step-column-cell]',
  templateUrl: './step-column-cell.component.html',
  styleUrls: ['./step-column-cell.component.css']
})
export class StepColumnCellComponent implements OnInit {

  @Input() stepColumn: string = ''
  @Output() deleteStepColumn: EventEmitter<string> = new EventEmitter

  deleteButtonVisible: boolean = false

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

}
