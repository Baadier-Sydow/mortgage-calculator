import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MortgageCalculatorFormComponent } from './components/mortgage-calculator-form/mortgage-calculator-form.component';
import { HouseDisplayComponent } from './components/house-display/house-display.component';

import { MortgageCalculatorService } from './services/mortgage-calculator.service';

@NgModule({
  declarations: [MortgageCalculatorFormComponent, HouseDisplayComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [MortgageCalculatorFormComponent],
  providers: [MortgageCalculatorService]
})
export class MortgageCalculatorModule {
  constructor() {}
}
