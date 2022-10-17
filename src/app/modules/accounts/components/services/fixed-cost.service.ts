import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FixedCostService {

  baseUrl = "http://localhost:8080/expenditure/";
  purpose = this.baseUrl + "purpose/";
 
  constructor(private http: HttpClient) { }

  //get data from Expendidure using Expendidure type
  getExpenditureByPurpose(purpose_id: any): Observable<any> {
    return this.http.get(`${this.purpose}${purpose_id}`);
  }
  
}
