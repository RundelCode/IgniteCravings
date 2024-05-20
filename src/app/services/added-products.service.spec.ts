import { TestBed } from '@angular/core/testing';

import { AddedProductsService } from './added-products.service';

describe('AddedProductsService', () => {
  let service: AddedProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
