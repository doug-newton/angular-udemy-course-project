import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'udemy-course-project';
  
  currentPage: string = 'shopping-list'

  onSwitchPage($event: string) {
    this.currentPage = $event
  }
}
