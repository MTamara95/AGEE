import { Component } from '@angular/core';
import { LdapService } from 'src/services/ldap.service';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  constructor(private ldapService: LdapService) {}

  async login() {
    const searchResult = await this.ldapService.search('tamara.marcetic', 'Monkey@55~14', 'avisto-eastern.com');
    
    // console.log(searchResult.searchEntries[0].mail);
    // console.log(searchResult.searchEntries[0].memberOf)
  }
}
