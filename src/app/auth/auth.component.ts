import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = true
  isLoading: boolean = false

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) return
    const { username, password } = authForm.value
    this.isLoading = true

    if (this.isLoginMode) {
    } else {
      this.authService.signup(username, password).pipe(
        catchError(error => {
          return of(error)
        })
      ).subscribe({
        next: result => {
          console.log(result)
        },
        error: error => {
          console.log(error)
        },
        complete: () => {
          this.isLoading = false
        }
      })
    }
    authForm.reset()
  }

}
