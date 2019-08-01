import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loginSignupForm: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) { }
  
  ngOnInit() {
    this.loginSignupForm = this.fb.group({
      email: '',
      password: ''
    });
  }

  login(){
    //console.log("Welcome to Login");
    this.auth.login(this.loginSignupForm.value).subscribe((responseData)=>{
      //console.log(responseData);
      console.log("Login is successful");
      this.router.navigate(["/Recepies"]);
  });
  }

  signup(){
    //console.log("Welcome to signup");
    this.auth.signup(this.loginSignupForm.value).subscribe((responseData)=>{
      //console.log(responseData);
      console.log("SignUp successful")
      this.router.navigate(["/Recepies"]);
  });
  }
}