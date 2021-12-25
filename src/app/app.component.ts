import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup

  ngOnInit(): void {
      this.projectForm = new FormGroup({
        name: new FormControl(null),
        email: new FormControl(null),
        status: new FormControl(null)
      })
  }

  onSubmit() {
    console.log(this.projectForm)
  }

}
