import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  getUrl = "http://localhost:8080/role/list"

  saveUrl = "http://localhost:8080/role/save"

  constructor(private http: HttpClient) { }

  getRoles(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }

   //Save data in Role
   savePurpose(data: any): Observable<any> {
    return this.http.post(`${this.saveUrl}`, data);
  }

}
