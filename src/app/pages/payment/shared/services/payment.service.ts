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

  constructor(private store: Store<AppState>, private http: HttpClient) {}
  
  pay(card: CardPayment){
    return this.store.dispatch(new PaymentActions.MakePayment(card))
    // return this.http.post<any>(url, card);
  }

}
