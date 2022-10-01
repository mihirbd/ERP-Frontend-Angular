import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpLogComponent } from './erp-log.component';

describe('ErpLogComponent', () => {
  let component: ErpLogComponent;
  let fixture: ComponentFixture<ErpLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErpLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
