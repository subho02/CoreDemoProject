import { TestBed } from '@angular/core/testing';

import { AddHardwareService } from './add-hardware.service';

describe('AddHardwareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddHardwareService = TestBed.get(AddHardwareService);
    expect(service).toBeTruthy();
  });
});
