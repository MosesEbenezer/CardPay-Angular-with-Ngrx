import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CardPayment } from '../../models/card-payment.model';
import { AppState } from '../../app.state'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {

  cardDetails: Observable<CardPayment[]>;

  constructor(private store: Store<AppState>) {
    this.cardDetails = store.select('card')
  }

  ngOnInit(): void {
  }

}
