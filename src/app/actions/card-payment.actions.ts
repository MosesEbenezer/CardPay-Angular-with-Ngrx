import { Action } from '@ngrx/store';
import { CardPayment } from '../models/card-payment.model';
import { CardPaymentActionTypes } from '../shared/enum/card-payment-action-types.enum';

export class PaymentActions implements Action {
  type: any;
  payload: any;
}

export class MakePayment implements PaymentActions {
  readonly type = CardPaymentActionTypes.PAY

  constructor(public payload: any) {}
}

export type Actions = MakePayment