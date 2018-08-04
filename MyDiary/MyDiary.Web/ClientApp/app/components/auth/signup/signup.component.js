var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService, formbuilder, router) {
        this.authService = authService;
        this.formbuilder = formbuilder;
        this.router = router;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signUpForm = this.formbuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    };
    SignupComponent.prototype.onSubmit = function (signUpForm) {
        var email = signUpForm.controls['email'].value;
        var password = signUpForm.controls['password'].value;
        this.authService.register(email, password);
    };
    SignupComponent = __decorate([
        Component({
            selector: 'app-signup',
            templateUrl: './signup.component.html',
            styleUrls: ['./signup.component.css']
        }),
        __metadata("design:paramtypes", [AuthService, FormBuilder, Router])
    ], SignupComponent);
    return SignupComponent;
}());
export { SignupComponent };
//# sourceMappingURL=signup.component.js.map