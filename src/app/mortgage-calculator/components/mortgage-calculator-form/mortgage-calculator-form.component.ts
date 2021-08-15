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

  price: number;
  downPayment: number;
  term: number;
  interestRate: number;
  defaultPriceMax = 1000000;
  defaultTermAmount: number;
  defaultTermMax: number;
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

  handlePriceUpdate(updatedPrice: number) {
    this.price = Number(updatedPrice);
    const repaymentAmount =
      this.mortgageCalculatorService.calculateTermFromPrice(
        this.price,
        this.downPayment,
        this.interestRate,
        this.term
      );
    const fullLoan = this.mortgageCalculatorService.calculatePriceFromTerm(repaymentAmount, this.term, this.interestRate);
  }

  handleTermUpdate(updatedTerm: number) {
    this.term = updatedTerm;
  }

  setDefaultTermValues(){
    this.defaultTermMax = this.mortgageCalculatorService.calculateTermFromPrice(
      this.defaultPriceMax,
      0,
      this.interestRate,
      Math.min(...this.defaultTermOptions)
    );
  }

  setMaxDownPayment(){
    this.defaultDownPaymentMax = this.defaultPriceMax - 1;
  }
}
