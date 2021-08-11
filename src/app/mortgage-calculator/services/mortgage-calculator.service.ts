import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorService {

  constructor() { }

  calculateTermFromPrice(price: number, downPayment: number, interestRate: number, term: number): number {
    // M = P(r(1+r)^n / ((1+r)^n)-1))
    // Extra bracket?
    const principle = price - downPayment;
    return Math.ceil(principle * (interestRate * (1 + interestRate) ** term / ((1 + interestRate) ** term) - 1 ) / interestRate);
  }

  calculatePriceFromTerm(term: number, interestRate: number, termAmount: number): number {
    // P = M/(r(1+r)^n / ((1+r)^n)-1))
    // hmmm
    const principle = termAmount / (interestRate * (1 + interestRate) ** term / ((1 + interestRate) ** term) - 1 );
    return Math.ceil(principle);
  }
}
