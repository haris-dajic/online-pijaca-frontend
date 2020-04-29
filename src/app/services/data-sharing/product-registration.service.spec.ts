/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductRegistrationService } from './product-registration.service';

describe('Service: ProductRegistration', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductRegistrationService]
    });
  });

  it('should ...', inject([ProductRegistrationService], (service: ProductRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
