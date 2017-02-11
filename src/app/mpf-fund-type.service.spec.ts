/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MpfFundTypeService } from './mpf-fund-type.service';

describe('MpfFundTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MpfFundTypeService]
    });
  });

  it('should ...', inject([MpfFundTypeService], (service: MpfFundTypeService) => {
    expect(service).toBeTruthy();
  }));
});
