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
        name: new FormControl(null, [Validators.required, this.nameIsNotTestValidator]),
        email: new FormControl(null, [Validators.required, Validators.email]),
        status: new FormControl(null, Validators.required)
      })
  }

  nameIsNotTestValidator(control: FormControl): {[errorCode:string]:boolean} {
    if (control.value === 'Test') {
      return { nameIsTest: true }
    }
    else return null
  }

  onSubmit() {
    console.log(this.projectForm)
  }

}
