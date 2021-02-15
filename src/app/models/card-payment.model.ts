export class CardPayment {
  cardNumber: string = '' // required
  cardHolder: string = '' // required
  expirationDate: Date = new Date() // required, must be date and greater than current date
  securityCode: string = '' // optional, not less than 3 digits and not more than 3 digits.
  amount: Number = 0 // required, must be greated than 0
}
