import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import api from '../../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      id: ['', [Validators.required]]
    });
  }

  signUp(): void {
    if (this.signUpForm.valid) {
      const userData = {
        name: this.signUpForm.value.name,
        email: this.signUpForm.value.email,
        id: this.signUpForm.value.id
      };

      api.post('registration', userData)
        .then((res) => {
          const pin = res.data.user.pin;
          alert('Registration Successful. Your PIN is: ' + pin);
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
