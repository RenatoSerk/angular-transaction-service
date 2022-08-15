import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Transaction } from '../models/transaction';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnDestroy {

  _onDestroy = new Subject<void>();
  transactionDetails: Transaction;
  commentValue: string;

  constructor(@Inject(MAT_DIALOG_DATA) transactionDetails: Transaction, private dialogRef: MatDialogRef<TransactionDetailsComponent>) { 
    this.transactionDetails = transactionDetails;
    this.commentValue = this.transactionDetails.comments;
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  updateCommentAndClose(){
    this.dialogRef.close(this.commentValue);
  }

}
