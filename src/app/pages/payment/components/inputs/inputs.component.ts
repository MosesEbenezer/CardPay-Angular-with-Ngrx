import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }

  cardDetailsForm: FormGroup;

  onSubmit() {
    console.warn(this.cardDetailsForm.value);
    this.cardDetailsForm.reset()

  }

  ngOnInit(): void {
    this.cardDetailsForm = new FormGroup({

      'cardHolder': new FormControl(null, [Validators.required]),
      'cardNumber': new FormControl(null, [Validators.required]),
      'expirationDate': new FormControl(null, [Validators.required, // Validators.pattern('')
      ]), // (mandatory, Date, >CurrentDate)
      'securityCode': new FormControl(null, [Validators.minLength(3), Validators.maxLength(3), Validators.pattern('[0-9]+')]),
      'amount': new FormControl(null, [Validators.required, Validators.min(0), Validators.pattern('^[1-9][0-9]*$')]),
    })
  }

  get cardHolder() {
    return this.cardDetailsForm.get('cardHolder')
  }

  get cardNumber() {
    return this.cardDetailsForm.get('cardNumber')
  }

  get amount() {
    return this.cardDetailsForm.get('amount')
  }

  get expirationDate() {
    return this.cardDetailsForm.get('expirationDate')
  }

  get securityCode() {
    return this.cardDetailsForm.get('securityCode')
  }

}
