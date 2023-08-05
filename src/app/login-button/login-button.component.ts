import { Component } from '@angular/core';
import { LdapService } from 'src/services/ldap.service';
import { CredentialsService } from 'src/services/credentials.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  constructor(private ldapService: LdapService, private credentialsService: CredentialsService) {}

  async login() {
    const searchResult = await this.ldapService.search(
      this.credentialsService.username,
      this.credentialsService.password
      );

    // buffer, buffer[], string, string[] -> string...
    // pa iz stringa parsirati
    console.log(searchResult.searchEntries[0].mail);
    console.log(searchResult.searchEntries[0].memberOf)
  }
}
