var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.url = "/Account/";
    }
    AuthService.prototype.login = function (name, password) {
        var _this = this;
        var myHeaders = new HttpHeaders().set('Content-type', 'application/json');
        this.http.post(this.url + "Login", JSON.stringify({ name: name, password: password }), { headers: myHeaders })
            .subscribe(function (token) {
            alert('Login successful');
            _this.token = token.toString();
        }, function (error) {
            console.log(error);
            alert('Login failed ' + _this.token);
        });
    };
    AuthService.prototype.register = function (email, password) {
        var _this = this;
        var myHeaders = new HttpHeaders().set('Content-type', 'application/json');
        this.http.post(this.url + "Register", JSON.stringify({ email: email, password: password }), { headers: myHeaders })
            .subscribe(function (token) {
            alert('Register successful');
            _this.token = token.toString();
        }, function (error) {
            console.log(error);
            alert('Register failed');
        });
    };
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], AuthService);
    return AuthService;
}());
export { AuthService };
//# sourceMappingURL=auth.service.js.map