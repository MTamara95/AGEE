import { Injectable } from '@angular/core';
// import { Client, SearchResult } from 'ldapts';
import {INVALID_CREDENTIALS_ERROR_CODE, INVALID_CREDENTIALS_ERROR_MESSAGE, ACTIVE_DIRECTORY_USERNAME} from '../consts/constants'
import {EmployeeInterface} from '../models/employee.interface';

const domain = 'avisto-eastern.com';

@Injectable({
  providedIn: 'root'
})
export class LdapService {
  // ldapClient: Client;

  // constructor() { 
  //   this.ldapClient = new Client({url: `ldap://${domain}`});
  // }

  // async connect(username: string, password: string): Promise<void>{
  //   try{
  //     console.log(this.ldapClient);
  //     await this.ldapClient.bind(`${username}@${domain}`, password);
  //     console.log(`test2: ${this.ldapClient.isConnected}`);
  //   }
  //   catch(error){
  //     console.log('greska :(');
  //     throw (error);
  //   }
  // }

  async search(username: string, password: string): Promise<EmployeeInterface>{
    const employee: EmployeeInterface = {'emailAddress': 'test email', 'role': 'test role'} as EmployeeInterface;

    return employee;
    // try{
    //   await this.connect(username, password);

    //   const searchResult = await this.ldapClient.search(
    //     domain.split('.').map(e => `dc=${e}`).join(','),
    //       {
    //         filter: `(${ACTIVE_DIRECTORY_USERNAME}=${username}@${domain})`
    //       }
    //   );

    //   const emailAddress = searchResult.searchEntries[0]['mail'];
    //   const role = searchResult.searchEntries[0]['role'];

    //   const employee: EmployeeInterface = {'emailAddress': emailAddress, 'role': role} as EmployeeInterface;

    //   return employee;
    // }
    // catch(error){
    //   throw(error);
    // }
    // finally{
    //   this.ldapClient.unbind();
    // }
  }

  // stringConvert(entry: SearchResult): string{
  //   if(typeof entry === 'string'){
  //     return entry;
  //   }
  //   else if(Array.isArray(entry)){ // obraditi niz buffera, niz string-ova...
  //     return entry.join(' ');
  //   }
  //   else{
  //     throw(`nepoznat tip:${typeof entry}`);
  //   }
  // }
}