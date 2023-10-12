import { TestBed } from '@angular/core/testing';

import { HttpInterceporInterceptor } from './http-intercepor.interceptor';

describe('HttpInterceporInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpInterceporInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpInterceporInterceptor = TestBed.inject(HttpInterceporInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
