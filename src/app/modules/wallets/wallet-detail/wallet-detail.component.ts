import { Component, OnInit } from '@angular/core';
import { WalletComponentService } from '../services/wallet-component.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { WalletMovementFormComponent } from '../wallet-movement-form/wallet-movement-form.component';

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
    const dialogReft = this.dialog.open(WalletMovementFormComponent, {
      width: '500px',
      data: {
        date: new Date(),
        type: 'Income'
      }
    });

    dialogReft.afterClosed().subscribe(() => {
    });
  }
}
