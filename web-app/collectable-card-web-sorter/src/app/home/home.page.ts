// Core+
import { Component, OnInit } from '@angular/core';

// Angular Reactive Forms
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  isAuth = false;

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  signIn() {
    // const email = this.loginForm.controls.email.value;
    // const password = this.loginForm.controls.password.value;
    // this.authService.SignIn(email, password);
    this.loginForm.reset();

    // UI Demo Only
    this.isAuth = !this.isAuth;
  }

  ngOnInit(): void {
    // Form config and validation for the Add User Form
    this.loginForm = this.formBuilder.group({
      email: new FormControl('test@email.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('password1234', [Validators.required]),
    });
  }
}
