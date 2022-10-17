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
  totalUrl = this.baseUrl + "filter/amount/";
  amount = this.baseUrl + "amount";
  opening = this.baseUrl + "filter/openingAmount";

  constructor(private http: HttpClient) { }

  //get data from deposit by Obserbable from api
  getdeposit(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }

  //get data from deposit by Obserbable from api
  getOpenigBalance(): Observable<any> {
    return this.http.get(`${this.opening}`);
  }

  //get Amount from deposit using deposit Date
  getAmountByDate(date: any): Observable<any> {
    return this.http.get(`${this.amount}/${date}`);
  }

  //get data from deposit using deposit type
  getDepositByType(type: any): Observable<any> {
    let types = type;
    return this.http.get(`${this.filterUrl}/${types}`);
  }

  //get data from deposit using deposit Date
  getDepositByDate(date: any): Observable<any> {
    return this.http.get(`${this.filterUrl}/${date}`);
  }

  //get data from deposit using deposit DateBetween
  getDepositByDateBetween(date: any, date2:any): Observable<any> {
    return this.http.get(`${this.filterUrl}/${date}/${date2}`);
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

  //get data from deposit by Obserbable from api
  getDepositAmount(): Observable<any> {
    return this.http.get(`${this.totalUrl}`);
  }
  
}
