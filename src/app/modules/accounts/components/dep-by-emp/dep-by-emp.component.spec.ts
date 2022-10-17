import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepByEmpComponent } from './dep-by-emp.component';

describe('DepByEmpComponent', () => {
  let component: DepByEmpComponent;
  let fixture: ComponentFixture<DepByEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepByEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepByEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
