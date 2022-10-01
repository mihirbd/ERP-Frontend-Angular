import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureHistoryComponent } from './expenditure-history.component';

describe('ExpenditureHistoryComponent', () => {
  let component: ExpenditureHistoryComponent;
  let fixture: ComponentFixture<ExpenditureHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditureHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenditureHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
