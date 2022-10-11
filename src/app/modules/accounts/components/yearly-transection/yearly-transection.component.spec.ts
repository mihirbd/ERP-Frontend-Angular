import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearlyTransectionComponent } from './yearly-transection.component';

describe('YearlyTransectionComponent', () => {
  let component: YearlyTransectionComponent;
  let fixture: ComponentFixture<YearlyTransectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearlyTransectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearlyTransectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
