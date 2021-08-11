import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-house-display',
  templateUrl: './house-display.component.html',
  styleUrls: ['./house-display.component.scss'],
})
export class HouseDisplayComponent implements OnInit {
  @Input() price: number;
  extraSmallThreshold = 100000;
  smallThreshold = 300000;
  mediumThreshold = 300000;
  largeThreshold = 5000000;
  extraLargeThreshold = 8000000;

  constructor() { }

  ngOnInit() {}

}
