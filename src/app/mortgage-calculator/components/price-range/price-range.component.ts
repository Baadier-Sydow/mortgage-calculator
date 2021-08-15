import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.scss'],
})
export class PriceRangeComponent implements OnInit {
  @Input() defaultPrice: number;
  @Input() defaultPriceMax: number;
  @Output() priceChange = new EventEmitter<number>();

  price: number;
  priceMin = 10000;
  priceStep = 10000;
  rangeDebounce = 0;

  constructor() { }

  ngOnInit() {
    this.price = this.defaultPrice;
  }

  updatePrice(updatedPrice) {
    this.price = updatedPrice.detail.value;
    this.priceChange.emit(this.price);
  }
}
