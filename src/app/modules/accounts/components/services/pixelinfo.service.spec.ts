import { TestBed } from '@angular/core/testing';

import { PixelinfoService } from './pixelinfo.service';

describe('PixelinfoService', () => {
  let service: PixelinfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PixelinfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
