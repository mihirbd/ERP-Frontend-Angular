import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PurposeService {

  baseUrl = "http://localhost:8080/purpose/";

  saveUrl = this.baseUrl + "save";
  getUrl = this.baseUrl + "list";
  filterUrl = this.baseUrl + "filter";
  deleteUrl = this.baseUrl + "delete/";

  constructor(private http: HttpClient) { }

  //get data from purpose by Obserbable from api
  getPurpose(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }


  //get data from purpose using purpose type
  getPurposeByType(type: any): Observable<any> {
    let types = type;
    return this.http.get(`${this.filterUrl}/${types}`);
  }

//-----------------------------------------------------------------------------
  
  //Save data in purpose
  savePurpose(data: any): Observable<any> {
    return this.http.post(`${this.saveUrl}`, data);
  }

  //-----------------------------------------------------------------------------

  //Delete data from purpose
  deletePurpose(id: any) {
    return this.http.delete(this.deleteUrl+id);
  }
}
