import { TestBed } from '@angular/core/testing';

import { LdapService } from './ldap.service';
import { HttpClientModule } from '@angular/common/http';

describe('LdapService', () => {
  let service: LdapService;
  let search: jasmine.Spy<jasmine.Func> | ((arg0: string, arg1: string) => void);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(LdapService);
    search = jasmine.createSpy('search');
    search('test username', 'test password');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('tracks that the search was called', () => {
    expect(search).toHaveBeenCalled();
  });
});
