import { Component, ViewEncapsulation } from '@angular/core';

/*
1. create 3 new components: GameControl, Odd, Even
2. the GameControl component should have buttons to start and pause the game
3. when starting the game, an event (holding an incrementing number) should get emitted each second
4. the event should be listenable from outside the component
5. when stopping the game, no more events should be emitted
6. a new odd/even component should be created based on the number in the event emitted by GameControl
7. simply output `odd {number}` or `even {number}` in the respective components
8. style the element holding the text differently for each component
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = []
  evenNumbers: number[] = []

  constructor() {
  }

  onNumberEmitted($event: number) {
    if ($event % 2 == 1)
    {
      this.oddNumbers.push($event);
    }
    else {
      this.evenNumbers.push($event)
    }
  }
}
