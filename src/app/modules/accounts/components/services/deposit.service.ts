import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepositService {

  baseUrl = "http://localhost:8080/deposit/";

  saveUrl = this.baseUrl + "save";
  getUrl = this.baseUrl + "list";
  filterUrl = this.baseUrl + "filter";
  deleteUrl = this.baseUrl + "delete/";

  constructor(private http: HttpClient) { }

  //get data from deposit by Obserbable from api
  getdeposit(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }


  //get data from deposit using deposit type
  getDepositByType(type: any): Observable<any> {
    let types = type;
    return this.http.get(`${this.filterUrl}/${types}`);
  }

//-----------------------------------------------------------------------------
  
  //Save data in deposit
  saveDeposit(data: any): Observable <any> {
    return this.http.post(`${this.saveUrl}`, data);
  }

  //-----------------------------------------------------------------------------
  
  //Delete data from deposit
  deleteDeposit(id: any) {
    return this.http.delete(this.deleteUrl+id);
  }
}
