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
var SigninComponent = /** @class */ (function () {
    function SigninComponent(formbuilder, router) {
        this.formbuilder = formbuilder;
        this.router = router;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.signInForm = this.formbuilder.group({
            name: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    };
    SigninComponent.prototype.onSignin = function (signInForm) {
        var name = signInForm.controls['name'].value;
        var password = signInForm.controls['password'].value;
    };
    SigninComponent = __decorate([
        Component({
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.css']
        }),
        __metadata("design:paramtypes", [FormBuilder, Router])
    ], SigninComponent);
    return SigninComponent;
}());
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map