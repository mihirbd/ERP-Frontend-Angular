import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = "http://localhost:8080/employee_info/";
  saveUrl = this.baseUrl + "save";
  getUrl = this.baseUrl + "list";
  filterUrl = this.baseUrl + "filter";
  deleteUrl = this.baseUrl + "delete/";

  constructor(private http: HttpClient) { }

  //get data from Employee by Obserbable from api
  getEmployee(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }


//-----------------------------------------------------------------------------
  
  //Save data in Employee
  saveEmployee(data: any): Observable<any> {
    return this.http.post(`${this.saveUrl}`, data);
  }

  //-----------------------------------------------------------------------------

  //Delete data from Employee
  deleteEmployee(id: any) {
    return this.http.delete(this.deleteUrl+id);
  }
}
