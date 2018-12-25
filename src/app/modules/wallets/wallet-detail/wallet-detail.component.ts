import { Component, OnInit } from '@angular/core';
import { WalletComponentService } from '../services/wallet-component.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { WalletMovementFormComponent } from '../wallet-movement-form/wallet-movement-form.component';
import { Movement } from '../model/movement';
import { WalletsFormComponent } from '../components/wallets-form/wallets-form.component';

@Component({
  selector: 'app-wallet-detail',
  templateUrl: './wallet-detail.component.html',
  styleUrls: ['./wallet-detail.component.css']
})
export class WalletDetailComponent implements OnInit {
  private walletId;
  private wallet;

  constructor(
    private route: ActivatedRoute,
    private walletComponentService: WalletComponentService,
    private dialog: MatDialog) {
      this.walletId = this.route.snapshot.paramMap.get('id');
    }

  ngOnInit() {
    this.load();
  }

  private load() {
    this.walletComponentService.wallets.subscribe(() => {
      this.wallet = this.walletComponentService.get(this.walletId);
    });

    this.walletComponentService.load(this.walletId);
  }

  addMovement(): void {
    const movement: Movement = {
      type: 'Income',
      wallet: this.wallet
    };

    const dialogReft = this.dialog.open(WalletMovementFormComponent, {
      width: '500px',
      data: {
        date: new Date(),
        type: 'Income',
        wallet: this.wallet
      }
    });

    dialogReft.afterClosed().subscribe(() => {
    });
  }

  edit() {
    const dialogReft = this.dialog.open(WalletsFormComponent, {
      width: '500px',
      data: { ...this.wallet }
    });

    dialogReft.afterClosed().subscribe(() => {
    });
  }
}
