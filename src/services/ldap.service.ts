import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LdapService {
  private apiUrl = 'http://localhost:3000/api/ldap/search';

  constructor(private http: HttpClient) { 
  }

  async search(username: string, password: string, domain: string){
    const body = {username, password, domain};
    try{
      const searchResult = await this.http.post<any>(this.apiUrl, body).toPromise();
      // buffer, buffer[], string, string[] -> string...
      // pa iz stringa parsirati
      console.log(searchResult.searchEntries[0].mail);
      console.log(searchResult.searchEntries[0].memberOf)
      
      return searchResult;
    }
    catch(error){
      console.log(error);
      return null;
    }
  }
}
