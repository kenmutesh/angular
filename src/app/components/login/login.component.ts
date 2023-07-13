import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
      alert('Login Successful');
      this.loginForm.reset();
      // this.router.navigate(['home']);
      // Set the token in localStorage
      localStorage.setItem('token', JSON.stringify({ access_token: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODkyODUyNTMsInN1YiI6IjEifQ.-lVf8D3Ki3gJu9Df4f4iirOAjPBa32wRd8o7lzZfVTc' }));
      this.router.navigate(['home']);
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}
