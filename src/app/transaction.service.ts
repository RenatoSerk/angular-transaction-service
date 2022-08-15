import { Injectable } from '@angular/core';
import { Transaction } from './models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  NUMBER_OF_TRANSACTIONS = 10;
  RANDOM_COMMENTS: string[] = [
    "Car payment", "Dental bill", "Health insurance", "Phone payment", "Groceries", "Gas",
    "Steam deck", "New bike", "Rent", "Uber", "Netflix subscription", "Haircut"
  ];

  constructor() { }

  // Create fake data
  createData(dataAmount: number): Transaction[] {
    let createdTransactions: Transaction[] = [];

    for (let i = 1; i <= dataAmount; i++){
      let randomDate = new Date(new Date().getTime() - Math.floor(Math.random() * 10_000_000_001));
      let randomComment = (Math.floor(Math.random() * 2)) ? this.RANDOM_COMMENTS[Math.floor(Math.random() * this.RANDOM_COMMENTS.length)] : "";
      createdTransactions.push({id: i, date: randomDate, comments: randomComment});
    }

    return createdTransactions;
  }

  getTransactionData(): Promise<Transaction[]>{
    return new Promise( (resolve, reject) => {
      // Spoof retrieving data from server with a timer
      setTimeout(() => {
        resolve(this.createData(this.NUMBER_OF_TRANSACTIONS));
      }, 2000);
    });
  }
}
