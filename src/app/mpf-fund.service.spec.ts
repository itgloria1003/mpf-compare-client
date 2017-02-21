/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MpfFundService } from './mpf-fund.service';

describe('MpfFundService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MpfFundService]
    });
  });

  it('should ...', inject([MpfFundService], (service: MpfFundService) => {
    expect(service).toBeTruthy();
  }));
});
