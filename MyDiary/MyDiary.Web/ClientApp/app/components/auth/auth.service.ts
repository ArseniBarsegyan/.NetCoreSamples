import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './loginModel';

@Injectable()
export class AuthService {
    token: string;
    private url = "/Account/";

    constructor(private http: HttpClient) {
    }

    login(model: LoginModel) {
        var result = this.http.post(this.url + "Login", model)
            .subscribe(
                data => {
                    alert('Login successful');
                    this.token = data.toString();
                },
                error => {
                    alert('Login failed');
                }
            );
    }
}