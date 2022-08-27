import { TestBed } from '@angular/core/testing';

import { UiTemplatesService } from './ui-templates.service';

describe('UiTemplatesService', () => {
  let service: UiTemplatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiTemplatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
