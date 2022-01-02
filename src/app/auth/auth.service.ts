import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class AuthService {

    constructor(
        private http: HttpClient
    ) { }

    signup(username: string, password: string): Observable<object> {
        return this.http.post<object>('http://localhost:8080/api/users/signup', {
            username, password
        })
    }

}