import { Component } from '@angular/core';
import { LdapService } from 'src/services/ldap.service';
import { CredentialsService } from 'src/services/credentials.service';
import { EmployeeInterface } from 'src/models/employee.interface';
import { UtilClass } from 'src/util.class';
import { UNSUCCESSFUL_AUTHENTICATION_ERROR_MESSAGE } from 'src/consts/constants';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.css']
})
export class LoginButtonComponent {
  constructor(private ldapService: LdapService, private credentialsService: CredentialsService) {}

  async login() {
    const employee: EmployeeInterface | null = await this.ldapService.search(this.credentialsService.username, this.credentialsService.password);

    if(employee == null){
      alert(UNSUCCESSFUL_AUTHENTICATION_ERROR_MESSAGE);
    }
    else{
      const emailAddress: string = UtilClass.convertLdapSearchResultToString(employee?.emailAddress);
      const role: string = UtilClass.convertLdapSearchResultToString(employee?.role);
      alert(`email: ${emailAddress}, role: ${role}`);
    }
  }
}