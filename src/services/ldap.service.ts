import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LdapService {
  private apiUrl = 'http://localhost:3000/api/ldap/search';

  constructor(private http: HttpClient) { 
  }

  async search(username: string, password: string){
    const body = {username, password};
    try{
      const searchResult = await this.http.post<any>(this.apiUrl, body).toPromise();
      return searchResult;
    }
    catch(error){
      console.log(error);
      return null;
    }
  }
}
