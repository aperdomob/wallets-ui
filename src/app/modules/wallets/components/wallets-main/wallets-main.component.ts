import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { WalletsFormComponent } from '../wallets-form/wallets-form.component';

@Component({
  selector: 'app-wallets-main',
  templateUrl: './wallets-main.component.html',
  styleUrls: ['./wallets-main.component.css']
})
export class WalletsMainComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  addNew(): void {
    const dialogReft = this.dialog.open(WalletsFormComponent, {
      width: '500px',
      data: {}
    });

    dialogReft.afterClosed().subscribe(() => {});
  }
}
