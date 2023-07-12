import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import api from "../../api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  balance: number = 0;
  userId: string = '';

  ngOnInit(): void {
    this.fetchBalance();
    this.fetchUserId();
  }

  fetchBalance(): void {
    api.get<number>('/balance')
      .then(response => {
        const mybalance = response.data;
        this.balance = mybalance;
        console.log(this.balance); // Output: 2000

      })
      .catch(error => {
        console.error('Error fetching balance:', error);
      });
  }

  fetchUserId(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      this.userId = user.accountId;
    }
  }
}
