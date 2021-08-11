import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MortgageCalculatorFormComponent } from './mortgage-calculator-form.component';

describe('MortgageCalculatorFormComponent', () => {
  let component: MortgageCalculatorFormComponent;
  let fixture: ComponentFixture<MortgageCalculatorFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageCalculatorFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MortgageCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
