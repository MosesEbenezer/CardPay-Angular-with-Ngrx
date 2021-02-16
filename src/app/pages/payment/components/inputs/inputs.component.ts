import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {

  constructor() { }

  cardHolder = new FormControl('');
  cardNumber = new FormControl('');
  expirationDate = new FormControl('');
  securityCode = new FormControl('');
  amount = new FormControl('');

  ngOnInit(): void {
  }

}
