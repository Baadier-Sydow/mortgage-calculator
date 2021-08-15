import { MortgageCalculatorService } from './../../services/mortgage-calculator.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mortgage-calculator-form',
  templateUrl: './mortgage-calculator-form.component.html',
  styleUrls: ['./mortgage-calculator-form.component.scss'],
})
export class MortgageCalculatorFormComponent implements OnInit {
  @Input() defaultPrice: number;
  @Input() defaultInterestRate: number;
  @Input() defaultTerm: number;
  @Input() defaultTermOptions: Array<number>;
  @Input() defaultDownPayment: number;

  downPayment: number;
  term: number;
  interestRate: number;

  price: number;
  defaultPriceMax = 1000000;
  priceMin = 10000;
  priceStep = 10000;
  rangeDebounce = 0;

  termRepaymentAmount: number;
  termRepaymentMax: number;
  defaultDownPaymentMax: number;

  constructor(private mortgageCalculatorService: MortgageCalculatorService) {}

  ngOnInit() {
    this.price = this.defaultPrice;
    this.downPayment = this.defaultDownPayment;
    this.term = this.defaultTerm;
    this.interestRate = this.defaultInterestRate;
    this.setDefaultTermValues();
    this.setMaxDownPayment();
  }

  handlePriceUpdate(updatedPrice?) {
    if(updatedPrice) {
      this.price = Number(updatedPrice.detail.value);
    }
    const updatedRepaymentAmount =
      this.mortgageCalculatorService.calculateTermFromPrice(
        this.price,
        this.downPayment,
        this.interestRate,
        this.term
      );
    this.termRepaymentAmount = updatedRepaymentAmount;
  }

  handleTermUpdate() {
    // const fullLoan = this.mortgageCalculatorService.calculatePriceFromTerm(
    //   this.termRepaymentAmount,
    //   this.term,
    //   this.interestRate
    // );
    // this.price = fullLoan;
  }

  setDefaultTermValues() {
    this.termRepaymentMax =
      this.mortgageCalculatorService.calculateTermFromPrice(
        this.defaultPriceMax,
        0,
        this.interestRate,
        Math.min(...this.defaultTermOptions)
      );
    this.termRepaymentAmount =
      this.mortgageCalculatorService.calculateTermFromPrice(
        this.price,
        this.downPayment,
        this.interestRate,
        this.term
      );
  }

  setMaxDownPayment() {
    this.defaultDownPaymentMax = this.defaultPriceMax - 1;
  }
}
