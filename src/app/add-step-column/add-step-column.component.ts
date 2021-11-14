import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-step-column',
  templateUrl: './add-step-column.component.html',
  styleUrls: ['./add-step-column.component.css']
})
export class AddStepColumnComponent implements OnInit {

  @Output() addStepColumn: EventEmitter<string> = new EventEmitter

  newStepColumn: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  onAddStepColumn() {
    this.addStepColumn.emit(this.newStepColumn)
    this.newStepColumn = ''
  }

}
