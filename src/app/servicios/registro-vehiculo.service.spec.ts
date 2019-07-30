import { TestBed } from '@angular/core/testing';

import { RegistroVehiculoService } from './registro-vehiculo.service';

describe('RegistroVehiculoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistroVehiculoService = TestBed.get(RegistroVehiculoService);
    expect(service).toBeTruthy();
  });
});
