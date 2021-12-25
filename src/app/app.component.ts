import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectForm: FormGroup

  ngOnInit(): void {
      this.projectForm = new FormGroup({
        name: new FormControl(null, Validators.required, this.nameIsNotTestAsyncValidator),
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

  nameIsNotTestAsyncValidator(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        if (control.value === 'Test') {
          resolve({nameIsTest: true})
        } else {
          resolve(null)
        }
      }, 500)
    })
  }

  onSubmit() {
    console.log(this.projectForm)
  }

}
