import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginModel } from './loginModel';

@Injectable()
export class AuthService {
    private url = "/Account/";

    constructor(private http: HttpClient) {
    }

    login(model: LoginModel) {
        return this.http.post(this.url + "Login", model);
    }
}