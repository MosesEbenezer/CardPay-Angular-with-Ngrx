import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardPayment } from 'src/app/models/card-payment.model';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {

  url = '';
  constructor(private http: HttpClient) { }

  pay(card: CardPayment) {
    return this.http.post<any>(this.url, card);
  }
}
