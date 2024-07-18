import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcaiCalculatorComponent } from './acai-calculator.component';

describe('AcaiCalculatorComponent', () => {
  let component: AcaiCalculatorComponent;
  let fixture: ComponentFixture<AcaiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcaiCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcaiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
