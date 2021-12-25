import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup
  forbiddenUsernames = ['Chris', 'Anna']

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user: new FormGroup({
        username: new FormControl(null, [Validators.required, this.forbiddenNamesValidator.bind(this)]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    })
  }

  get hobbyControls() {
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  onAddHobby() {
    (<FormArray>this.signupForm.get('hobbies')).push(
      new FormControl(null, Validators.required)
    )
  }

  onSubmit() {
    console.log(this.signupForm)
  }

  forbiddenNamesValidator(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) > -1)
      return { nameIsForbidden: true }
    return null
  }
}
