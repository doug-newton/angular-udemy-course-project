import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
        email: new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmailsValidator),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    })
    this.signupForm.valueChanges.subscribe(value => {
      console.log(value)
    })
    this.signupForm.statusChanges.subscribe(value => {
      console.log(value)
    })
  }

  onSetValue() {
    this.signupForm.setValue({
      user: {
        username: 'doug',
        email: 'doug@example.com'
      },
      gender: 'male',
      hobbies: []
    })
  }

  onPatchValue() {
    this.signupForm.patchValue({
      user: {
        email: 'test@test.com'
      }
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
    this.signupForm.reset()
  }

  forbiddenNamesValidator(control: FormControl): { [key: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(control.value) > -1)
      return { nameIsForbidden: true }
    return null
  }

  forbiddenEmailsValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true})
        }
        else {
          resolve(null)
        }
      }, 500)
    })
  }
}
