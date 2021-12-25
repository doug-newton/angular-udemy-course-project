import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('myForm') form: NgForm
  answer: string = ''
  genders: string[] = ['male', 'female']

  onSetValue() {
    this.form.setValue({
      userData: {
        username: 'Superuser',
        email: ''
      },
      secret: 'teacher',
      answer: '',
      gender: 'male'
    })
  }

  onPatchValue() {
    this.form.form.patchValue({
      userData: {
        username: 'Superuser'
      }
    })
  }

  onSubmit() {
    console.log(this.form)
  }
}
