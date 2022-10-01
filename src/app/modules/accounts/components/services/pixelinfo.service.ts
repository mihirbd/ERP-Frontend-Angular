import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PixelinfoService {

  baseUrl = "http://localhost:8080/pixel_info/";

  saveUrl = this.baseUrl + "save";
  getUrl = this.baseUrl + "list";
  deleteUrl = this.baseUrl + "delete";

  constructor(private http: HttpClient) { }

  //get data from Pixel_info by Obserbable from api
  getInfo(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }

  //get Pixel Info from api
  getPixelInfo(){
    return this.http.get(this.getUrl);
  }

  // get() {
  //   return this.http.get<User[]>("http://localhost:8080/user/list")
  // }

//-----------------------------------------------------------------------------
  
  //Save data in Pixel Info
  InsertInfo(data: any): Observable<any> {
    return this.http.post(`${this.saveUrl}`, data);
  }

  //-----------------------------------------------------------------------------

  //Delete data from Pixel Info
  deleteInfo(id:any){
    return this.http.delete(this.deleteUrl+id);
  }

  // delete(id: number) {
  //   return this.http.delete<User>(`http://localhost:8080/user/delete/${id}`);
  // }
}
