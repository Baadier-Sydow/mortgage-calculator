import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-monthly-repayment',
  templateUrl: './monthly-repayment.component.html',
  styleUrls: ['./monthly-repayment.component.scss'],
})
export class MonthlyRepaymentComponent implements OnInit {
  @Input() termRepaymentAmount: number;
  @Input() termRepaymentMax: number;
  @Output() termChange = new EventEmitter<number>();

  priceMin = 0;
  rangeDebounce = 0;

  constructor() {}

  ngOnInit() { }

  updateTerm(updatedTerm) {
    this.termRepaymentAmount = updatedTerm.detail.value;
    this.termChange.emit(this.termRepaymentAmount);
  }
}
