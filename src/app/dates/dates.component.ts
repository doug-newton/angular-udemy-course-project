import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.css']
})
export class DatesComponent implements OnInit {

  constructor() { }

  theDate: Date = new Date()

  ngOnInit(): void {

    let issueDate = '2027-08-15'
    let rna = 10

    for (let m = 1; m < 15; m++) {
      let x: string = moment('2027-08-15').add(m, 'months').set('date', rna).format('YYYY-MM-DD')
      console.log(x)
    }
    
    let m: string = moment('2027-08-15').startOf('month').format('YYYY-MM-DD')
    let me: string = moment().endOf('month').format('YYYY-MM-DD')
    console.log(m)
    console.log(me)
  }

}
