import { TestBed } from '@angular/core/testing';

import { EffectorService } from './effector.service';

describe('EffectorService', () => {
  let service: EffectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EffectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
