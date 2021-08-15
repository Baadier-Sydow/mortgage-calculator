import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MortgageCalculatorService {
  constructor() {}

  calculateTermFromPrice(
    price: number,
    downPayment: number,
    annualInterestRate: number,
    termYears: number
  ): number {
    const principle = price - downPayment;
    const interestRate = annualInterestRate / 12;
    const termMonths = termYears * 12;
    return Math.ceil(
      principle *
        (interestRate *
        (Math.pow(1 + interestRate, termMonths) /
          (Math.pow(1 + interestRate, termMonths) - 1)))
    );
  }

  calculatePriceFromTerm(
    repaymentAmount: number,
    termYears: number,
    annualInterestRate: number,
  ): number {
    const interestRate = annualInterestRate / 12;
    const termMonths = termYears * 12;
    return Math.ceil(
      repaymentAmount /
        (interestRate *
        (Math.pow(1 + interestRate, termMonths) /
          (Math.pow(1 + interestRate, termMonths) - 1)))
    );
  }
}
