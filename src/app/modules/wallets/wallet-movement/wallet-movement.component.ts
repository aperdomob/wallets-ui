import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-wallet-movement',
  templateUrl: './wallet-movement.component.html',
  styleUrls: ['./wallet-movement.component.css']
})
export class WalletMovementComponent implements OnInit {
  displayedColumns: string[] = ['date', 'description', 'income', 'expense'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
  }
}
