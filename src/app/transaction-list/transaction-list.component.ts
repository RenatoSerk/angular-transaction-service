import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss']
})
export class TransactionListComponent implements OnInit {
  dataSource = [];
  displayedColumns: string[] = ['id', 'date', 'comments', 'actions'];

  constructor() { }

  ngOnInit(): void {
  }

  doNothing(){
    
  }

}
