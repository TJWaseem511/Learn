import { Component , OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signUpForm: FormGroup;
  ngOnInit(){
    this.signUpForm = new FormGroup({
      'name': new FormGroup({
        'firstName': new FormControl(null, Validators.required),
        'lastName': new FormControl(null, Validators.required),
      }),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      're_password': new FormControl(null , Validators.required),
      'terms': new FormControl(null, Validators.required)
    });
  }
  onSubmit(){
    console.log(this.signUpForm);
  }
}
