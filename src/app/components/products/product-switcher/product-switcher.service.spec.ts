import { TestBed, inject } from '@angular/core/testing';

import { ProductSwitcherService } from './product-switcher.service';

describe('ProductSwitcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductSwitcherService]
    });
  });

  it('should be created', inject([ProductSwitcherService], (service: ProductSwitcherService) => {
    expect(service).toBeTruthy();
  }));
});
