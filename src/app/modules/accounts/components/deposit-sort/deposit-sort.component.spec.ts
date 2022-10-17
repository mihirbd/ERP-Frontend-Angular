import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositSortComponent } from './deposit-sort.component';

describe('DepositSortComponent', () => {
  let component: DepositSortComponent;
  let fixture: ComponentFixture<DepositSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositSortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepositSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
