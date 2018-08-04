import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {RegisterModel} from "../registerModel";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    signUpForm: FormGroup;

    constructor(private authService: AuthService, private formbuilder: FormBuilder, private router: Router) {
    }

    ngOnInit() {
        this.signUpForm = this.formbuilder.group({
            email: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    onSubmit(signUpForm: NgForm) {
        const email = signUpForm.controls['email'].value;
        const password = signUpForm.controls['password'].value;
        this.authService.register(email, password);
    }
}