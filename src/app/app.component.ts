import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { CardPayment } from './models/card-payment.model';
import { AppState } from './app.state'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  cardDetails: Observable<CardPayment[]>;

  constructor(private store: Store<AppState>) {
    this.cardDetails = store.select('card')
  }

  ngOnInit() { }
}
