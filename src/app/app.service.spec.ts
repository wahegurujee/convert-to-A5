import { TestBed, inject } from '@angular/core/testing';

import { AppService } from './app.service';
import { HttpHandler, HttpClient } from '@angular/common/http';

describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));
});
