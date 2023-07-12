import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
      accountNumber: ['', Validators.required]
    });
  }

  deposit() {
    if (this.depositForm.valid) {
      const depositData = this.depositForm.value;
      // Perform the deposit action using the submitted values
      this.http.post<any>('http://localhost:3000/deposit', depositData)
        .subscribe(res => {
          alert('Deposit Successful');
          this.depositForm.reset();
        }, err => {
          alert('Something went wrong');
        });
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}
