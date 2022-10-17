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
  totalUrl = this.baseUrl + "filter/amount";
  amount = this.baseUrl + "amount";
  opening = this.baseUrl + "filter/openingAmount";

  constructor(private http: HttpClient) { }

  //get data from Expendidure by Obserbable from api
  getExpenditure(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }

  //get data from Expendidure by Obserbable from api
  getOpeningBalance(): Observable<any> {
    return this.http.get(`${this.opening}`);
  }


  //get data from Expendidure using Expendidure type
  getExpenditureByType(type: any): Observable<any> {
    let types = type;
    return this.http.get(`${this.filterUrl}/${types}`);
  }

  //get data from Expendidure using Expendidure Date
  getExpenditureByDate(date: any): Observable<any> {
    return this.http.get(`${this.filterUrl}/${date}`);
  }

  //get data from Expendidure using Date Between
  getExpenditureByDateBetween(date: any, date1:any): Observable<any> {
    return this.http.get(`${this.filterUrl}/${date}/${date1}`);
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


  //get all amount from expenditure
  getExpenditureAmount(): Observable<any> {
    return this.http.get(`${this.totalUrl}`);
  }

  //get Amount from expenditure using expenditure Date
  getExpenditureAmountByDate(date: any): Observable<any> {
    return this.http.get(`${this.amount}/${date}`);
  }




}
