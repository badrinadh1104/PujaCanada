import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private router:Router){};
  show:boolean= true;
 

  registertoggle(){
    if(this.show){
      this.show=false;
    }else{
      this.show=true;
    }
    return this.show;
  }

  loginForm = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  })

  login(){
    console.log(this.loginForm.value);
    if(this.loginForm.value.email=="badri@gmail.com" && this.loginForm.value.password=="12345"){
      this.router.navigate(['/customer/dashboard']);
    }
  }



}
