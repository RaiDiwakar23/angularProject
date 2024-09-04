import { TestBed } from '@angular/core/testing';

import { ProductapisService } from './productapis.service';

describe('ProductapisService', () => {
  let service: ProductapisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductapisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
