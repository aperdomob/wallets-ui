import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { WalletComponentService } from '../services/wallet-component.service';
import { Wallet } from '../model/wallet';
import { Movement } from '../model/movement';

interface TableItem {
  date: Date;
  description: string;
  income: number;
  expense: number;
}

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

  private walletId;
  private wallet: Wallet;

  constructor(
    private route: ActivatedRoute,
    private walletComponentService: WalletComponentService,
) {
  this.walletId = this.route.snapshot.paramMap.get('id');
}

  ngOnInit() {
    this.walletComponentService.wallets.subscribe(() => {
      this.wallet = this.walletComponentService.get(this.walletId);
      this.dataSource.data = this.transform(this.wallet.movements);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.walletComponentService.load(this.walletId);
  }

  public getExpenseTotal(): number {
    return this.dataSource.data.reduce((accumulator, cv: TableItem) => accumulator + cv.expense, 0);
  }

  public getIncomeTotal(): number {
    return this.dataSource.data.reduce((accumulator, cv: TableItem) => accumulator + cv.income, 0);
  }

  private transform(movements: Movement[]): TableItem[] {
    return movements.map((movement) => ({
      date: movement.date,
      description: movement.name,
      income: movement.type === 'Income' ? movement.value : 0,
      expense: movement.type === 'Income' ? 0 : movement.value
    }));
  }
}
