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
    // TODO: Use EventEmitter with form value
    console.warn(this.cardDetailsForm.value);
  }

  ngOnInit(): void {
    this.cardDetailsForm = new FormGroup({

      'cardHolder': new FormControl(null, [Validators.required]),
      'cardNumber': new FormControl(null, [Validators.required]),
      'expirationDate': new FormControl(null, [Validators.required, Validators.pattern('for regex string here')]), // (mandatory, Date, >CurrentDate)
      'securityCode': new FormControl(null, [Validators.minLength(3), Validators.maxLength(3)]),
      'amount': new FormControl(null, [Validators.required, Validators.min(0)]),
  
    })
  }

}
