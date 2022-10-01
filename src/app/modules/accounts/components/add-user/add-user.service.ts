import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  baseUrl = "http://localhost:8080/user/";
  createUrl = this.baseUrl + "save";
  getUrl = this.baseUrl + "list";

  constructor(private http: HttpClient) { }

  //get data from Users by Obserbable
  getUser(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }

  get() {
    return this.http.get<User[]>("http://localhost:8080/user/list")
  }

  //insert data for Users
  InsertUser(data: any): Observable<any> {
    return this.http.post(`${this.createUrl}`, data);
  }

  delete(id: number) {
    return this.http.delete<User>(`http://localhost:8080/user/delete/${id}`);
  }


}
