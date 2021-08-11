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
  defaultPriceMax = 2000000;
  defaultTermAmount: number;
  defaultTermMax: number;

  constructor(private mortgageCalculatorService: MortgageCalculatorService) {}

  ngOnInit() {
    this.price = this.defaultPrice;
    this.downPayment = this.defaultDownPayment;
    this.term = this.defaultTerm;
    this.interestRate = this.defaultInterestRate;
    this.setDefaultTermValues();
  }

  handlePriceUpdate(updatedPrice: number) {
    this.price = updatedPrice;
    console.log(this.mortgageCalculatorService.calculateTermFromPrice(this.price, this.downPayment, this.interestRate, this.term));
  }

  handleTermUpdate(updatedTerm: number) {
    this.term = updatedTerm;
  }

  setDefaultTermValues(){

  }
}
