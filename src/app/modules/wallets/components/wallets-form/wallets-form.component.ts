import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MAT_DATE_LOCALE, DateAdapter } from '@angular/material';
import { WalletConfigService } from '../../services/wallet-config.service';
import { WalletComponentService } from '../../services/wallet-component.service';

@Component({
  selector: 'app-wallets-form',
  templateUrl: './wallets-form.component.html',
  styleUrls: ['./wallets-form.component.css']
})
export class WalletsFormComponent implements OnInit {
  walletStatus: String[] = [];
  priorities: number[];

  constructor(public dialogRef: MatDialogRef<WalletsFormComponent>,
    @Inject(MAT_DIALOG_DATA) public walletData: any,
    private walletConfigService: WalletConfigService,
    private walletComponentService: WalletComponentService) {}

  ngOnInit() {
    this.walletConfigService.getStatus().subscribe((walletStatus) => {
      this.walletStatus = walletStatus;
    });

    this.priorities = [1, 2, 3, 4, 5];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(wallet) {
    this.walletComponentService.save(wallet);
    this.dialogRef.close(wallet);
  }
}
