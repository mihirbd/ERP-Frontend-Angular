import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenditureSortComponent } from './expenditure-sort.component';

describe('ExpenditureSortComponent', () => {
  let component: ExpenditureSortComponent;
  let fixture: ComponentFixture<ExpenditureSortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenditureSortComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenditureSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
