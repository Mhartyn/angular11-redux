import { TestBed } from '@angular/core/testing';

import { AccionpopularService } from './accionpopular.service';

describe('AccionpopularService', () => {
  let service: AccionpopularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccionpopularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
