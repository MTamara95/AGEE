import { TestBed } from '@angular/core/testing';

import { LdapService } from './ldap.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LdapService', () => {
  let service: LdapService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LdapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
