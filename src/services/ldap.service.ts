import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeInterface } from 'src/models/employee.interface';
import { environment } from 'src/environments/environment';
import { API_URL } from 'src/consts/constants';

@Injectable({
  providedIn: 'root'
})
export class LdapService {
  constructor(private http: HttpClient) { 
  }

  async search(username: string, password: string): Promise<EmployeeInterface>{
    const body = {username, password};
    alert(environment.link);
    try{
      const employee: EmployeeInterface = {'emailAddress': 'test email', 'role': 'test role'};// Promise<EmployeeInterface> = await this.http.post<any>(environment.link + API_URL, body).toPromise();
      return employee;
    }
    catch(error){
      throw error;
    }
  }
}