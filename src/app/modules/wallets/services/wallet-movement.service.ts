import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Movement } from '../model/movement';
import { MovementUiModelFactory } from '../model/movement-ui-model-factory';
import { map, catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class WalletMovementService {
  private walletsUrl = 'http://localhost:8080/wallets';

  constructor(private http: HttpClient) { }

  public save(movement: Movement): Observable<Movement> {
    const url = `${this.walletsUrl}/${movement.wallet.id}/movements`;
    const movementBody = MovementUiModelFactory.toBody(movement);

    return this.http.post<Movement>(url, movementBody, httpOptions)
      .pipe(map(MovementUiModelFactory.fromResponse), catchError(this.handleError<Movement>('save movement')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);
    };
  }
}
