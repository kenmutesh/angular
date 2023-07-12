import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import api from '../../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      id: ['', Validators.required],
      pin: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const credentials = btoa(`${this.loginForm.value.id}:${this.loginForm.value.pin}`);
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Basic ${credentials}`
      };

      const body = {}; // Add any additional data required in the request body

      api.post('get-token', body, { headers })
        .then(res => {
          alert('Login Successful');
          this.loginForm.reset();
          this.router.navigate(['home']);

          // Store the token in localStorage
          localStorage.setItem('token', JSON.stringify({ access_token: res.data.access_token }));
        })
        .catch(err => {
          alert('Authentication failed. Please check your credentials.');
        });
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}
