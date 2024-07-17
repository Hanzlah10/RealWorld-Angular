import { TestBed } from '@angular/core/testing';

import { AddtoFavoritesService } from './addto-favorites.service';

describe('AddtoFavoritesService', () => {
  let service: AddtoFavoritesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddtoFavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
