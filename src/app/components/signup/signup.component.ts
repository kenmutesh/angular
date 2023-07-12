import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.name]],
      id: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  signUp(): void {
    if (this.signUpForm.valid) {
      const userData = this.signUpForm.value;
      axios
        .post('http://localhost:3000/signupUsersList', userData)
        .then((res) => {
          alert('Registration Successful');
          this.signUpForm.reset();
          this.router.navigate(['login']);
        })
        .catch((error) => {
          alert('Something went wrong');
        });
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}
