import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  accounts: {name:string, status:string}[] = []

  constructor(
    private accountsService: AccountsService
  ){
    this.accountsService.statusChange.subscribe(status => {
      alert('New Status: ' + status)
    })
  }

  ngOnInit(): void {
    //  NB - an array is a reference type, so we are making a reference to the original array
    this.accounts = this.accountsService.accounts
  }

}
