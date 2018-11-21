import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WalletConfigService {
  private walletsConfigUrl = 'http://localhost:8080/config/wallets';

  constructor(private http: HttpClient) { }

  public getStatus(): Observable<String[]> {
    const statusUrl = `${this.walletsConfigUrl}/status`;

    return this.http.get<String[]>(statusUrl)
      .pipe(catchError(this.handleError('get wallet config status', [])));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
