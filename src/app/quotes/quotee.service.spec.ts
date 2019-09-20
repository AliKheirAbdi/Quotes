import { TestBed } from '@angular/core/testing';

import { QuoteeService } from './quotee.service';

describe('QuoteeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuoteeService = TestBed.get(QuoteeService);
    expect(service).toBeTruthy();
  });
});
