import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPurposeComponent } from './add-purpose.component';

describe('AddPurposeComponent', () => {
  let component: AddPurposeComponent;
  let fixture: ComponentFixture<AddPurposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPurposeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPurposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
