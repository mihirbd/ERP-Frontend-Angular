import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyTransectionComponent } from './monthly-transection.component';

describe('MonthlyTransectionComponent', () => {
  let component: MonthlyTransectionComponent;
  let fixture: ComponentFixture<MonthlyTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyTransectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
