import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor() { }

  private firstSubscription: Subscription

  ngOnInit() {
    const customObservable = new Observable(observer => {
      let count = 0
      setInterval(()=>{
        observer.next(count++)
      }, 1000)
    })

    this.firstSubscription = customObservable.subscribe(count => {
      console.log(count)
    })
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe()
  }

}
