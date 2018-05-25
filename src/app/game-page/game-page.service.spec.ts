import { TestBed, inject } from '@angular/core/testing';

import { GamePageService } from './game-page.service';
import { HttpClient,HttpHandler } from '@angular/common/http';



describe('GamePageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GamePageService, HttpClient,HttpHandler]
    });
  });

  it('should be created', inject([GamePageService], (service: GamePageService) => {
    expect(service).toBeTruthy();
  }));
});
