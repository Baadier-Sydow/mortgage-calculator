import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  defaultPrice = 500000;
  defaultInterestRate = 3.0;
  defaultTerm = 5;
  defaultTermOptions = [5, 10, 15, 20, 25, 30];
  defaultDownPayment = 100000;

  constructor() {}
}
