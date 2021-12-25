import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup

  ngOnInit(): void {
      this.projectForm = new FormGroup({
        name: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        status: new FormControl(null, Validators.required)
      })
  }

  onSubmit() {
    console.log(this.projectForm)
  }

}
