import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    signup(username: string, password: string) {
        return this.http.post('http://localhost:8080/api/users/signup', {
            username, password
        })
    }

}