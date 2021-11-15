import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-execution-params',
  templateUrl: './execution-params.component.html',
  styleUrls: ['./execution-params.component.css']
})
export class ExecutionParamsComponent implements OnInit {

  @Output() updateParams: EventEmitter<{
    months: number,
    issueDate: string,
    startDate: string,
    paymentDate: string
  }> = new EventEmitter

  months: number = 3
  issueDate: string = moment("2027-08-15").format("YYYY-MM-DD")
  startDate: string = moment("2027-09-10").format("YYYY-MM-DD")
  paymentDate: string = moment("2027-09-15").format("YYYY-MM-DD")

  constructor() { }

  ngOnInit(): void {
  }

  onUpdateParams() {
    this.updateParams.emit({
      months:this.months, 
      issueDate:this.issueDate, 
      startDate:this.startDate, 
      paymentDate:this.paymentDate})
  }

}
