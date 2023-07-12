import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  transferForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.transferForm = this.formBuilder.group({
      id: ['', Validators.required],
      transferAccount: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  transfer() {
    if (this.transferForm.valid) {
      const transferData = this.transferForm.value;
      // Perform the transfer action using the submitted values
      this.http.post<any>('http://localhost:3000/transfer', transferData)
        .subscribe(res => {
          alert('Transfer Successful');
          this.transferForm.reset();
        }, err => {
          alert('Something went wrong');
        });
    } else {
      alert('Please fill in all the required fields.');
    }
  }
}
