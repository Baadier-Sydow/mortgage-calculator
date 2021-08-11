import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-monthly-repayment',
  templateUrl: './monthly-repayment.component.html',
  styleUrls: ['./monthly-repayment.component.scss'],
})
export class MonthlyRepaymentComponent implements OnInit {
  @Input() defaultTermAmount: number;
  @Input() defaultTermMax: number;
  @Output() termChange = new EventEmitter<number>();

  termAmount: number;
  priceMin = 10000;
  priceMax: number;
  rangeDebounce = 0;

  constructor() {}

  ngOnInit() {
    this.termAmount = this.defaultTermAmount;
    this.priceMax = this.defaultTermMax;
  }

  updateTerm(updatedTerm) {
    this.termAmount = updatedTerm.detail.value;
    this.validateMaxTermRange();
    this.termChange.emit(this.termAmount);
  }

  validateMaxTermRange() {
    // if (this.price > this.priceMax) {
    //   this.priceMax = this.price;
    // }
    // if (
    //   this.price < this.defaultPriceMax &&
    //   this.defaultPriceMax !== this.priceMax
    // ) {
    //   this.priceMax = this.defaultPriceMax;
    // }
  }
}
