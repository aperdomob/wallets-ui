import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { Wallet } from '../model/wallet';
import { WalletsService } from './wallets.service';

@Injectable({
  providedIn: 'root'
})
export class WalletComponentService {
  private data: Wallet[] = [];
  public wallets = new BehaviorSubject<Wallet[]>([]);

  constructor(private walletService: WalletsService) {}

  public getAll() {
    this.walletService.getAll().subscribe((wallets) => {
      this.data = wallets;
      this.wallets.next(this.data);
    });
  }

  public save(wallet: Wallet) {
    this.walletService.save(wallet).subscribe((newWallet) => {
      this.updateData(wallet, newWallet);
      this.wallets.next(this.data);
    });
  }

  public get(walletId: string): Wallet {
    const wallet = this.data.find((current) => current.id === walletId);

    return wallet;
  }

  public load(walletId: string) {
    const wallet = this.data.find((current) => current.id === walletId);

    if (typeof wallet === 'undefined') {
      this.walletService.get(walletId).subscribe((obtainedWallet) => {
        if (obtainedWallet !== null) {
          this.data.push(obtainedWallet);

          this.wallets.next(this.data);
        }
      });
    }
  }

  private updateData(oldWallet: Wallet, newWallet: Wallet): void {
    if (typeof newWallet.id === 'undefined') {
      return;
    }

    if (typeof oldWallet.id === 'undefined') {
      this.data.push(newWallet);
      return;
    }

    const oldIndex = this.data.findIndex((element) => element.id === oldWallet.id);

    this.data.splice(oldIndex, 1);
    this.data.push(newWallet);
  }
}
