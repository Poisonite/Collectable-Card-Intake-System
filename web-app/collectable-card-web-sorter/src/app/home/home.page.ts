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

  // Uncomment these 3 lines when building real auth
  signIn() {
    // const email = this.loginForm.controls.email.value;
    // const password = this.loginForm.controls.password.value;
    // this.authService.SignIn(email, password);
    this.loginForm.reset();

    // UI Demo Only
    this.isAuth = !this.isAuth;
  }

  ngOnInit(): void {
    // Form config and validation for the login form
    this.loginForm = this.formBuilder.group({
      // Clear dummy values from form when building real auth
      email: new FormControl('test@email.com', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl('password1234', [Validators.required]),
    });
  }
}
