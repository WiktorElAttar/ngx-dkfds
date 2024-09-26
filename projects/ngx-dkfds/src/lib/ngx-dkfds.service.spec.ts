import { TestBed } from '@angular/core/testing';

import { NgxDkfdsService } from './ngx-dkfds.service';

describe('NgxDkfdsService', () => {
  let service: NgxDkfdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDkfdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
