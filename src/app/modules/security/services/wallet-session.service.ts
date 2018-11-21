import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../../storage/services/local-storage.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WalletSessionService {
  private sessionUrl = 'http://localhost:8080/session';

  constructor(
    private http: HttpClient,
    private localStoreService: LocalStorageService) { }

  public init({ sessionId, mail }): Observable<void> {
    return this.http.post<void>(this.sessionUrl, { sessionId, mail }, httpOptions)
      .pipe(catchError(this.handleError<void>('session init')));
  }

  public login({ username, password }) {
    const loginUrl = 'http://localhost:8080/login';

    return this.http.post<string>(loginUrl, { username, password }, httpOptions)
    .pipe(
      map((response: any) => {
        console.log('ingresa al set storage');
        this.localStoreService.set('token', response.token);

        return response.token;
      }),
      catchError(this.handleError<string>('login', '')));
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
