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
  priceMax: number;
  priceStep = 10000;
  rangeDebounce = 0;

  constructor() { }

  ngOnInit() {
    this.price = this.defaultPrice;
    this.priceMax = this.defaultPriceMax;
  }

  updatePrice(updatedPrice) {
    this.price = updatedPrice.detail.value;
    this.validateMaxPriceRange();
    this.priceChange.emit(this.price);
  }

  validateMaxPriceRange(){
    if(this.price > this.priceMax){
      this.priceMax = this.price;
    }
    if((this.price < this.defaultPriceMax) && (this.defaultPriceMax !== this.priceMax)){
      this.priceMax = this.defaultPriceMax;
    }
  }

}
