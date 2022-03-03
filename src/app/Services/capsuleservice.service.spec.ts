import { TestBed } from '@angular/core/testing';

import { CapsulesService } from './Capsules.service';

describe('CapsuleserviceService', () => {
  let service: CapsulesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapsulesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
