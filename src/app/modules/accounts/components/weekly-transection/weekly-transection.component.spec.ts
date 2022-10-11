import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyTransectionComponent } from './weekly-transection.component';

describe('WeeklyTransectionComponent', () => {
  let component: WeeklyTransectionComponent;
  let fixture: ComponentFixture<WeeklyTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeeklyTransectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeeklyTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
