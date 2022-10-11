import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTransectionComponent } from './daily-transection.component';

describe('DailyTransectionComponent', () => {
  let component: DailyTransectionComponent;
  let fixture: ComponentFixture<DailyTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyTransectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
