import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {

  baseUrl = "http://localhost:8080/expenditure/";

  saveUrl = this.baseUrl + "save";
  getUrl = this.baseUrl + "list";
  filterUrl = this.baseUrl + "filter";
  deleteUrl = this.baseUrl + "delete/";

  constructor(private http: HttpClient) { }

  //get data from Expendidure by Obserbable from api
  getExpenditure(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }


  //get data from Expendidure using Expendidure type
  getExpenditureByType(type: any): Observable<any> {
    let types = type;
    return this.http.get(`${this.filterUrl}/${types}`);
  }

//-----------------------------------------------------------------------------
  
  //Save data in Expendidure
  saveExpenditure(data: any): Observable <any> {
    return this.http.post(`${this.saveUrl}`, data);
  }

  //-----------------------------------------------------------------------------
  
  //Delete data from Expendidure
  deleteExpenditure(id: any) {
    return this.http.delete(this.deleteUrl+id);
  }
}
