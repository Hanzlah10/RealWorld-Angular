import { TestBed } from '@angular/core/testing';

import { PopulartagsService } from './populartags.service';

describe('PopulartagsService', () => {
  let service: PopulartagsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopulartagsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
