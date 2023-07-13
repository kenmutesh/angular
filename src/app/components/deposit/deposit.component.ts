import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import api from "../../api.service";

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  depositForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      amount: ['', Validators.required],
      accountNumber: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  deposit() {
    if (this.depositForm.valid) {
      const depositData = this.depositForm.value;
      const tokenData = localStorage.getItem('token');

      // Parse the token data JSON string to extract the access token
      const token = tokenData ? JSON.parse(tokenData).access_token : null;

      api.post('/deposit', depositData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
        .then(response => {
          alert('Deposit Successful');
          this.depositForm.reset();
        })
        .catch(error => {
          alert('Something went wrong');
        });
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}
