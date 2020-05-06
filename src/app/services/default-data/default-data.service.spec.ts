/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefaultDataService } from './default-data.service';

describe('Service: DefaultData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultDataService]
    });
  });

  it('should ...', inject([DefaultDataService], (service: DefaultDataService) => {
    expect(service).toBeTruthy();
  }));
});
