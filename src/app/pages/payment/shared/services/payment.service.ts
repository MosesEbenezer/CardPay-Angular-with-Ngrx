import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardPayment } from 'src/app/models/card-payment.model';

import { Store } from '@ngrx/store';
import { AppState } from '../../../../app.state';
import * as PaymentActions from '../../../../actions/card-payment.actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  // constructor(private http: HttpClient) { }

  // pay(card: CardPayment) {
  //   return this.http.post<any>(this.url, card);
  // }

  constructor(private store: Store<AppState>) {}

  pay(card: CardPayment){
    return this.store.dispatch(new PaymentActions.MakePayment(card))
  }

}
