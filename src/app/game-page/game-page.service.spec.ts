import { TestBed, inject } from '@angular/core/testing';

import { GamePageService } from './game-page.service';

describe('GamePageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamePageService]
    });
  });

  it('should be created', inject([GamePageService], (service: GamePageService) => {
    expect(service).toBeTruthy();
  }));
});
