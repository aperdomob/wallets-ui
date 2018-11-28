import { Component, OnInit, ViewChild } from '@angular/core';
import { WalletComponentService } from '../../services/wallet-component.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-wallets-list',
  templateUrl: './wallets-list.component.html',
  styleUrls: ['./wallets-list.component.css']
})
export class WalletsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'dueDate', 'goal', 'status', 'priority'];
  dataSource = new MatTableDataSource([]);
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private walletComponentService: WalletComponentService) { }

  ngOnInit() {
    this.walletComponentService.wallets.subscribe((wallets) => {
      this.dataSource.data = wallets;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });

    this.walletComponentService.getAll();
  }
}
