import { TestBed } from '@angular/core/testing';

import { ProcessbarService } from './processbar.service';

describe('ProcessbarService', () => {
  let service: ProcessbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
