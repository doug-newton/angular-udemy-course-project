import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

/*
NB - the @Injectable() decorator is for the receiving class of the injection, 
not for the class to be injected.
if a service will not have anything injected into it, then this is
not necessary.

however, it's recommended that you do use it regardless for future versions of angular
*/

@Injectable()
export class AccountsService {

  constructor(
    private loggingService: LoggingService
  ){
  }

  statusChange: EventEmitter<string> = new EventEmitter

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({
        name, status
    });
    this.loggingService.logStatusChange(status)
  }

  updateStatus(id: number, status:string) {
    this.accounts[id].status = status
    this.loggingService.logStatusChange(status)
    this.statusChange.emit(status)
  }

}