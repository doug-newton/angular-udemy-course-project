import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(
    private userService: UserService
  ) {}

  userActivated = false
  subscription: Subscription

  ngOnInit() {
    this.subscription = this.userService.activatedEmitter.subscribe(didActivate => {
      this.userActivated = didActivate
    })
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }
}
