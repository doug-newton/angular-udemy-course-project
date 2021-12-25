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
  submitted = false
  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  }

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
    this.submitted = true
    this.user.username = this.form.value.userData.username
    this.user.email = this.form.value.userData.email
    this.user.secret = this.form.value.secret
    this.user.answer = this.form.value.answer
    this.user.gender = this.form.value.gender
  }
}
