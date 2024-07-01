import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router: Router) { };
  show: boolean = true;
  user!: User;
  StrongPasswordRegx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;

  registertoggle() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
    return this.show;
  }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  signupform = new FormGroup({
    uemail: new FormControl('', [Validators.required, Validators.email]),
    upassword: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.StrongPasswordRegx)]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required])
  })

  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.value.email == "badri@gmail.com" && this.loginForm.value.password == "12345") {
      this.router.navigate(['/customer/dashboard']);
    }

  }

  signUp() {
    console.log(this.signupform.value)
  }
}
