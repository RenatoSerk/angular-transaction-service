import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../transaction.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { TransactionDetailsComponent } from '../transaction-details/transaction-details.component';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  dataSource: Transaction[] = [];
  displayedColumns: string[] = ['id', 'date', 'comments', 'actions'];
  isLoading: boolean = false;

  constructor(private dataService: TransactionService, private detailsDialog: MatDialog ) { }

  ngOnInit(){
    this.isLoading = true;
    this.dataService.getTransactionData().then((data) => {
      this.isLoading = false;
      this.dataSource = data;
    });
  }

  viewDetails(itemID: number){
    const dialogConfig = new MatDialogConfig();
    let selectedItemIndex = this.dataSource.findIndex((transaction: Transaction) => transaction.id === itemID );
    dialogConfig.autoFocus = true;
    dialogConfig.data = this.dataSource[selectedItemIndex];
    
    this.detailsDialog.open(TransactionDetailsComponent, dialogConfig).afterClosed().subscribe((newComment) => {
      if (newComment !== undefined && newComment !== this.dataSource[selectedItemIndex]?.comments){
        this.dataSource[selectedItemIndex].comments = newComment;
      }
    });
  }

}
