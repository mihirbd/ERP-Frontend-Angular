import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankTransectionComponent } from './bank-transection.component';

describe('BankTransectionComponent', () => {
  let component: BankTransectionComponent;
  let fixture: ComponentFixture<BankTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankTransectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
