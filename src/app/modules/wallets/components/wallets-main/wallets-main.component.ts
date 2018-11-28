import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WalletsFormComponent } from '../wallets-form/wallets-form.component';
import { Wallet } from '../../model/wallet';

@Component({
  selector: 'app-wallets-main',
  templateUrl: './wallets-main.component.html',
  styleUrls: ['./wallets-main.component.css']
})
export class WalletsMainComponent implements OnInit {
  private lastDueDate = new Date();

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  addNew(): void {
    const dialogReft = this.dialog.open(WalletsFormComponent, {
      width: '500px',
      data: {
        isPostponable: false,
        dueDate: this.lastDueDate
      }
    });

    dialogReft.afterClosed().subscribe((wallet: Wallet) => {
      if (typeof wallet !== 'undefined' && wallet.dueDate !== null && typeof wallet.dueDate !== 'undefined') {
        this.lastDueDate = wallet.dueDate;
      }
    });
  }
}
