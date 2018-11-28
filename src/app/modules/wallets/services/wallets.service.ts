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

  public getAll(): Observable<Wallet[]> {
    return this.http.get<Wallet[]>(this.walletsUrl).pipe(
      map(this.fromResponseListToModelList),
      catchError(this.handleError<Wallet[]>('get all wallets', [])));
  }
  public save(wallet: Wallet): Observable<Wallet> {
    const walletBody = WalletUiModelFactory.fromModelToBody(wallet);

    return this.http.post<WalletResponse>(this.walletsUrl, walletBody, httpOptions)
      .pipe(
        map(WalletUiModelFactory.fromResponseToModel),
        catchError(this.handleError<Wallet>('save wallet')));
  }

  get(walletId: string): Observable<Wallet> {
    const url = `${this.walletsUrl}/${walletId}`;

    return this.http.get<Wallet>(url).pipe(map(WalletUiModelFactory.fromResponseToModel));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }

  private fromResponseListToModelList(walletResponseList: WalletResponse[]): Wallet[] {
    return walletResponseList.map((response) => WalletUiModelFactory.fromResponseToModel(response));
  }
}
