import { Component, OnInit } from '@angular/core';
import { WalletComponentService } from '../services/wallet-component.service';
import { ActivatedRoute } from '@angular/router';

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
    private walletComponentService: WalletComponentService) {
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
}
