import { TestBed } from '@angular/core/testing';

import { RepositoryValuesService } from './repository-values.service';

describe('RepositoryValuesService', () => {
  let service: RepositoryValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositoryValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
