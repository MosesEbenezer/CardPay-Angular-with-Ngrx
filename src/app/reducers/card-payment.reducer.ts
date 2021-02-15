import { CardPaymentActionTypes } from '../shared/enum/card-payment-action-types.enum'
import * as PaymentActions from '../actions/card-payment.actions'
import { CardPayment } from '../models/card-payment.model'

export const initialState: CardPayment[] = [
    {
      cardNumber: '12345678',
      cardHolder: 'Dike Evir',
      expirationDate: new Date(),
      securityCode: '342',
      amount: 5000
    },
    {
      cardNumber: '333345678',
      cardHolder: 'Ebenezer Doe',
      expirationDate: new Date(),
      securityCode: '377',
      amount: 7000
    },
    {
      cardNumber: '333345678',
      cardHolder: 'Ebenezer Doe',
      expirationDate: new Date(),
      securityCode: '377',
      amount: 7000
    },
    // {
    //   cardNumber: '333345678',
    //   cardHolder: 'Ebenezer Doe',
    //   expirationDate: new Date(),
    //   securityCode: '377',
    //   amount: 7000
    // },
];

export function CardPaymentReducer(state = initialState, action: PaymentActions.Actions) {
  switch(action.type) {
    case CardPaymentActionTypes.PAY:
      return [...state, 
        action.payload
      ]
    default: 
      return state
  }
}