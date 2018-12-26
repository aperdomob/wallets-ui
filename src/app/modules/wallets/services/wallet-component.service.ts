import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { Wallet } from '../model/wallet';
import { WalletsService } from './wallets.service';
import { Movement } from '../model/movement';
import { WalletMovementService } from './wallet-movement.service';

@Injectable({
  providedIn: 'root'
})
export class WalletComponentService {
  private data: Wallet[] = [];
  public wallets = new BehaviorSubject<Wallet[]>([]);

  constructor(
    private walletMovementService: WalletMovementService,
    private walletService: WalletsService) {}

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

  public saveMovement(movement: Movement) {
    return this.walletMovementService.save(movement).subscribe(() => {
      return this.forceUpdate(movement.wallet.id);
    });
  }

  public get(walletId: string): Wallet {
    const wallet = this.data.find((current) => current.id === walletId);

    return wallet;
  }

  private forceUpdate(walletId: string) {
    this.walletService.get(walletId).subscribe((obtainedWallet) => {
      if (obtainedWallet !== null) {
        this.data = this.remove(walletId);
        this.data.push(obtainedWallet);

        this.wallets.next(this.data);
      }
    });
  }

  private remove(walletId) {
    return this.data.filter((item) => item.id !== walletId);
  }

  public load(walletId: string) {
    const wallet = this.data.find((current) => current.id === walletId);

    if (typeof wallet === 'undefined') {
      this.forceUpdate(walletId);
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
