import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/consts/constants';
import { EmployeeInterface } from 'src/models/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class LdapService {
  constructor(private http: HttpClient) { 
  }

  async search(username: string, password: string){
    const body = {username, password};
    try{
      const employee: Promise<EmployeeInterface> = await this.http.post<any>(API_URL, body).toPromise();
      return employee;
    }
    catch(error){
      console.log(error);
      return null;
    }
  }
}