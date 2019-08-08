import { TestBed } from '@angular/core/testing';

import { AvaService } from './ava.service';

describe('AvaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AvaService = TestBed.get(AvaService);
    expect(service).toBeTruthy();
  });
});
