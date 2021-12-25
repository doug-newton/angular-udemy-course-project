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
        if (count > 3) {
          observer.error(new Error("count is more than 3"))
        }
      }, 1000)
    })

    this.firstSubscription = customObservable.subscribe(count => {
      console.log(count)
    },
    error => {
      alert(error.message)
    })
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe()
  }

}
