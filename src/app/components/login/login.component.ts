import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginForm!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
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
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Basic ${credentials}`
      });

      const body = {}; // Add any additional data required in the request body

      app.post('/get-token', body, { headers })
        .subscribe(
          (res) => {
            alert('Login Successful');
            this.loginForm.reset();
            this.router.navigate(['home']);

            // Store the token in localStorage
            localStorage.setItem('token', JSON.stringify({ access_token: res.access_token }));
          },
          (err) => {
            alert('Authentication failed. Please check your credentials.');
          }
        );
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}
