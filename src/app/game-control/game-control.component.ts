import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() numberEmitted: EventEmitter<number> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  interval
  count: number = 0

  onStartClicked() {
    this.interval = setInterval(()=>{
      this.numberEmitted.emit(++this.count)
    }, 500)
  }

  onPauseClicked() {
    clearInterval(this.interval)
  }

}
