import { Injectable } from '@angular/core';
import { WalletBody } from '../model/service/wallet-body';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WalletResponse } from '../model/service/wallet-response';
import { Wallet } from '../model/wallet';
import { WalletUiModelFactory } from '../model/wallet-ui-model-factory';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WalletsService {
  private walletsUrl = 'http://localhost:8080/wallets';

  constructor(private http: HttpClient) { }

  public save(wallet: Wallet): Observable<Wallet> {
    const walletBody = WalletUiModelFactory.fromModelToBody(wallet);

    return this.http.post<WalletResponse>(this.walletsUrl, walletBody, httpOptions)
      .pipe(
        map(this.fromResponseToModel),
        catchError(this.handleError<Wallet>('save wallet')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  private fromResponseToModel(walletResponse): Wallet {
    return WalletUiModelFactory.fromResponseToModel(walletResponse);
  }
}
