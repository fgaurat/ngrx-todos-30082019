import { TestBed } from '@angular/core/testing';

import { LoadTodosService } from './load-todos.service';

describe('LoadTodosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadTodosService = TestBed.get(LoadTodosService);
    expect(service).toBeTruthy();
  });
});
