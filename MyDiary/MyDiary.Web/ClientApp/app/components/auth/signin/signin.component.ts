import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
    signInForm: FormGroup;

    constructor(private formbuilder: FormBuilder, private router: Router) {}

    ngOnInit() {
        this.signInForm = this.formbuilder.group({
            name: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
    }

    onSignin(signInForm: NgForm) {
        const name = signInForm.controls['name'].value;
        const password = signInForm.controls['password'].value;
    }
}