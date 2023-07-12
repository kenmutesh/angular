import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import axios from 'axios';
import api from "../../api.service";

// Set the default base URL for Axios
axios.defaults.baseURL = 'http://localhost:3000';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['', Validators.required]
    });
  }

  login() {
    api.get('/signupUsersList')
     // Use the relative URL instead of the full URL
      .then(res => {
        const user = res.data.find((a: any) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          alert('Login Successful');
          this.loginForm.reset();
          this.router.navigate(['home']);

          // Store the token in localStorage
          localStorage.setItem('token', JSON.stringify({ access_token: 'kdkskfmkmsdv' }));

        } else {
          alert('User not found');
        }
      })
      .catch(err => {
        alert('Something went wrong');
      });
  }
}
