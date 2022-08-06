import { TestBed } from '@angular/core/testing';

import { PermissoesGuard } from './permissoes.guard';

describe('PermissoesGuard', () => {
  let guard: PermissoesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissoesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
