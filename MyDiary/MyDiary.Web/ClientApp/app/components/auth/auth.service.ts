import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {
    token: string;
    private url = "/Account/";

    constructor(private http: HttpClient) {
    }

    login(name: string, password: string) {
        const myHeaders = new HttpHeaders().set('Content-Type', 'application/json');

        this.http.post<string>(this.url + "Login", JSON.stringify({ name, password }), { headers: myHeaders})
            .subscribe(
                (token) => {
                    alert('Login successful');
                    this.token = token.toString();
                },
                error => {
                    console.log(error);
                    alert('Login failed ' + this.token);
                }
            );
    }

    register(email: string, password: string) {
        const myHeaders = new HttpHeaders().set('Content-type', 'application/json');

        this.http.post<string>(this.url + "Register", JSON.stringify({ email, password }), { headers: myHeaders})
            .subscribe(
                (token) => {
                    alert('Register successful');
                    this.token = token.toString();
                },
                error => {
                    console.log(error);
                    alert('Register failed');
                }
            );
    }

    getToken() {
        return this.token;
    }
}