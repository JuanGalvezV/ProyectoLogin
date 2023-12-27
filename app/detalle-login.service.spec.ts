import { TestBed } from '@angular/core/testing';

import { DetalleLoginService } from './detalle-login.service';

describe('DetalleLoginService', () => {
  let service: DetalleLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
