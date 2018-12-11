import { TestBed } from '@angular/core/testing';

import { CardBackService } from './card-back.service';

describe('CardBackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardBackService = TestBed.get(CardBackService);
    expect(service).toBeTruthy();
  });
});
