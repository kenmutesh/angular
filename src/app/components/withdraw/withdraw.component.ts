import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {
  withdrawForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.withdrawForm = this.formBuilder.group({
      amount: ['', Validators.required],
      idNumber: ['', Validators.required]
    });
  }

  withdraw() {
    if (this.withdrawForm.valid) {
      const withdrawalData = this.withdrawForm.value;
      // Perform the withdrawal action using the submitted values
      this.http.post<any>('http://localhost:3000/withdraw', withdrawalData)
        .subscribe(res => {
          alert('Withdrawal Successful');
          this.withdrawForm.reset();
        }, err => {
          alert('Something went wrong');
        });
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}
